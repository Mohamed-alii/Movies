import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  catalogList:string; // this list contains the name of the list this page should display
  list:Array<any> = []; // this list should have it's content depending on cataloglist that the user clicked on 
  numberOfMovieShown:number = 16 ; // intially 16 => 4 rows each row has 4 movies
  imgPrefix = this.moviesService.imgPrefix;
  moviesGenres:Array<any> = [];

  @ViewChild('movieVideoContainer') movieVideoContainer: ElementRef;
  @ViewChild('movieVideo') movieVideo: ElementRef;

  constructor( private router:Router , private activatedRoute:ActivatedRoute , private moviesService:MoviesService) {

    // getting the user catalog list from the router
    this.catalogList = this.activatedRoute.snapshot.params['listName'];

    // getting movies genres
    this.moviesService.getMoviesGenres().subscribe( (data) => { 

      this.moviesGenres = data.genres;

    } , err => {} ) 

    switch (this.catalogList)
    {
      case 'nowPlaying':
        
          for(let i = 1; i < 7; i++){
            this.moviesService.getNowPlayingMovies(i).subscribe( (data) => { 

              this.list = this.list.concat( data.results );

              console.log(this.list , this.catalogList)

            } , (err) => { } );

          }

          break;

      case 'popular':
            for(let i = 1; i < 7; i++){
            this.moviesService.getPopularMovies(i).subscribe( (data) => { 

              this.list = this.list.concat( data.results );

              console.log(this.list , this.catalogList)

            } , (err) => { } );
            
          }

          break;

      case 'topRated':
          for(let i = 1; i < 7; i++){
            this.moviesService.getTopRatedMovies(i).subscribe( (data) => { 

              this.list = this.list.concat( data.results );

              console.log(this.list , this.catalogList)

            } , (err) => { } );
            
          }

          break;

      case 'upComing':
          for(let i = 1; i < 7; i++){
            this.moviesService.getUpComingMovies(i).subscribe( (data) => { 

              this.list = this.list.concat( data.results );

              console.log(this.list , this.catalogList)

            } , (err) => { } );
            
          }

          break;

      case 'trendingSeries':
          this.moviesService.getTrendingTvs().subscribe( (data) => { 

            this.list = this.list.concat( data.results );

            console.log(this.list , this.catalogList)

            this.numberOfMovieShown = 8;

          } , (err) => { } );

          break;

      case 'trendingMovies':
          this.moviesService.getTrendingMovies().subscribe( (data) => { 

            this.list = this.list.concat( data.results );

            console.log(this.list , this.catalogList)

            this.numberOfMovieShown = 8;


          } , (err) => { } );
          
          break;

    }

    // end of constructor
   }

   loadMore(eventInfo)
   {
    this.numberOfMovieShown = this.list.length;
    // hide the button after the user click it
    let target = eventInfo.target;
    target.style.display = "none";
   }

   playTrailer(movieId)
   {
    this.moviesService.getMovieTrailer(movieId).subscribe( (data) => {

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

  ngOnInit(): void {
  }

}
