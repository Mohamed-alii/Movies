import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery:string;
  searchResults:Array<any> = [];
  numberOfMovieShown:number = 12 ; // intially 12 => 3 rows each row has 4 movies
  imgPrefix = this.moviesService.imgPrefix;
  moviesGenres:Array<any> = [];
  tvSeriesGenres:Array<any> = [];

  @ViewChild('movieVideoContainer') movieVideoContainer: ElementRef;
  @ViewChild('movieVideo') movieVideo: ElementRef;

  constructor( private activatedRoute:ActivatedRoute , private moviesService:MoviesService) {

    // getting the query { user search keyword }
    this.searchQuery = this.activatedRoute.snapshot.paramMap.get("query");

    // getting movies genres
    this.moviesService.getMoviesGenres().subscribe( (data) => { 

      this.moviesGenres = data.genres;

    } , err => {} ) 

    // getting tv genres
    this.moviesService.getTvGenres().subscribe( (data) => { 

      this.tvSeriesGenres = data.genres;

    } , err => {} ) 

    // getting search results
    for(let i = 1; i < 5; i++){

      this.moviesService.getSearchResults( this.searchQuery , i).subscribe( (data) => {

        this.searchResults = this.searchResults.concat( data.results );
  
      } , (err) => {} )

    }

    

   }

   loadMore(eventInfo)
   {
    this.numberOfMovieShown = this.searchResults.length;
    // hide the button after the user click it
    let target = eventInfo.target;
    target.style.display = "none";
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

  ngOnInit(): void {
  }

}
