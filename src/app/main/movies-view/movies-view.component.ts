import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit , ViewChild , ElementRef , HostListener} from '@angular/core';
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss']
})
export class MoviesViewComponent implements OnInit {

  imgPrefix = this._MoviesService.imgPrefix;
  popularMovies:Array<any> = [];
  NowPlayingMovies:Array<any> = [];
  upComingMovies:Array<any> = [];
  selectedCategory:Array<any>;
  // the user selected category of movies [ up coming - now playing - popular ] , intially it will have up coming 
  // all should be in one array switch 1 2 3 movie array = depend on user click on radio button and subscribe

  //elements
  catlogNavbarStartingTopSet:number; // the catalog navbar top offset at the creation before being changed
  movieViewSectionFromTop:number; // the distance between movie view section and the top of the screen
  
  @ViewChild('catlogNav') catlogNavbar: ElementRef;
  @ViewChild('movieViewSection') movieViewSection: ElementRef;


  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

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


  constructor(private _MoviesService:MoviesService) {


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

        this.selectedCategory = this.NowPlayingMovies;
  
      } , (err) => {} )

    }
    
    // end of constructor
   }



  ngOnInit(): void {}

  ngAfterViewInit(){
    this.catlogNavbarStartingTopSet = this.catlogNavbar.nativeElement.offsetTop;
    this.movieViewSectionFromTop = this.movieViewSection.nativeElement.getBoundingClientRect().top;
  }

}
