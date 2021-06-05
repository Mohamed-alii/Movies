import { Component, OnInit , ViewChild , ElementRef , HostListener} from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss']
})
export class MoviesViewComponent implements OnInit {

  loadMoreIsOn:boolean = true; // true means is visible to use , false means the user clicked it and its gone
  numberOfMovieShown:number = 18 ; // intially 78 / 2 = 39 half the movies size
  imgPrefix = this._MoviesService.imgPrefix;
  popularMovies:Array<any> = [];
  NowPlayingMovies:Array<any> = [];
  upComingMovies:Array<any> = [];
  moviesGenres:Array<any> = [];
  selectedCategory:Array<any>;
  // the user selected category of movies [ up coming - now playing - popular ] , intially it will have up coming 
  // all should be in one array switch 1 2 3 movie array = depend on user click on radio button and subscribe

  //elements
  catlogNavbarStartingTopSet:number; // the catalog navbar top offset at the creation before being changed
  movieViewSectionFromTop:number; // the distance between movie view section and the top of the screen

  @ViewChild('catlogNav') catlogNavbar: ElementRef;
  @ViewChild('movieViewSection') movieViewSection: ElementRef;
  @ViewChild('movieVideo') movieVideo: ElementRef;
  @ViewChild('movieVideoContainer') movieVideoContainer: ElementRef;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    if(window.screen.availWidth <= 768 )
    {
      this.catlogNavbar.nativeElement.style.position = "relative";
      this.catlogNavbar.nativeElement.style.top = "0px";
      // in small screen we want this navbar to be fixed 
    }else{
      
      // on other screen we want to scroll it while the user scroll 
      if( window.pageYOffset <= this.catlogNavbarStartingTopSet ){
        // the catlog navbar is in its starting postion 
        this.catlogNavbar.nativeElement.style.position = "relative";
  
      }else if( window.pageYOffset < this.movieViewSection.nativeElement.clientHeight + this.movieViewSectionFromTop - this.catlogNavbar.nativeElement.clientHeight){
        // the catlog navbar should be fixed to the top of the screen with scrolling
        this.catlogNavbar.nativeElement.style.position = "sticky";
        this.catlogNavbar.nativeElement.style.top = "0px";
        this.catlogNavbar.nativeElement.style.zIndex = "100";
  
      }else{
        // the catlog navbar should be left at the last position at the bottom of the section
        this.catlogNavbar.nativeElement.style.top = this.movieViewSection.nativeElement.clientHeight + this.catlogNavbarStartingTopSet + "px";
  
        this.catlogNavbar.nativeElement.style.position = "relative";
  
      }
      
  
      console.log("start => " , this.catlogNavbarStartingTopSet)
      console.log("movie view offset" , this.movieViewSectionFromTop)
      console.log("movie view height => " , this.movieViewSection.nativeElement.clientHeight )
      console.log("action area => " , window.pageYOffset <= this.movieViewSection.nativeElement.clientHeight + this.movieViewSectionFromTop +  this.catlogNavbar.nativeElement.clientHeight )
  
    }
    
  }


  constructor(private _MoviesService:MoviesService) {

    // getting movies genres
    this._MoviesService.getMoviesGenres().subscribe( (data) => { 

      this.moviesGenres = data.genres;

    } , err => {} ) 

    // getting popular movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getPopularMovies(i).subscribe( (data) => {
  
        this.popularMovies = this.popularMovies.concat( data.results ) ;
  
      } , (err) => {} )

    }

    // getting up coming movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getUpComingMovies(i).subscribe( (data) => {
  
        this.upComingMovies = this.upComingMovies.concat( data.results ) ;
  
      } , (err) => {} )

    }

    // getting now playing movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getNowPlayingMovies(i).subscribe( (data) => {
  
        this.NowPlayingMovies = this.NowPlayingMovies.concat( data.results ) ;

        // intially set the selected category array with up-coming movies till then the user can change it
        this.selectedCategory = this.NowPlayingMovies;
  
      } , (err) => {} )

    }
    
    // end of constructor
   }

   // load more button 
   loadMore(e)
   {
     this.numberOfMovieShown = 78;
     // hide the button after the user click it
     e.target.style.display = "none";
   }


   // radio buttons function
   selected(eventInfo){
     let target = eventInfo.target;

     switch(target.id){

     //id = now-playing 
      case 'now-playing' :
        this.selectedCategory = this.NowPlayingMovies;
        break;

     //id = popular
      case 'popular' :
        this.selectedCategory = this.popularMovies;
        break;

     //id = up-coming 
     case 'up-coming' :
      this.selectedCategory = this.upComingMovies;
        break;
     }

   }

   playTrailer(movieId)
   {
    this._MoviesService.getMovieTrailer(movieId).subscribe( (data) => {

      // here we get the video key of youtube [ the movie the user clicked on ]
      let movieKey = data.results[0].key;
      // then we change the src of the iframes to the video link using the movie key 
      this.movieVideo.nativeElement.src = `https://www.youtube.com/embed/${movieKey}`;
     // we hide the movie trailer screen
      this.movieVideoContainer.nativeElement.style.display = "flex";
      this.movieVideoContainer.nativeElement.style.position = "fixed";

      window.document.body.style.overflow = "hidden";

    } , (err) => {} )
  

   }

   skipVideo()
   {
     // we hide the movie trailer screen
    this.movieVideoContainer.nativeElement.style.display = "none";
    this.movieVideoContainer.nativeElement.style.position = "unset";

    // and want to return the scroll bar as well
    window.document.body.style.overflowY = "scroll";

    //and we need to close the video so we give an empty src
    this.movieVideo.nativeElement.src = "";

   }

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.catlogNavbarStartingTopSet = this.catlogNavbar.nativeElement.offsetTop;
    this.movieViewSectionFromTop = this.movieViewSection.nativeElement.getBoundingClientRect().top;
  }

}
