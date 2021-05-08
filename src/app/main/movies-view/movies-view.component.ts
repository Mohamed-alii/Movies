import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss']
})
export class MoviesViewComponent implements OnInit {

  popularMovies;
  NowPlayingMovies:Array<any> = [];
  upComingMovies;
  // all should be in one array switch 1 2 3 movie array = depend on user click on radio button and subscribe
  imgPrefix = this._MoviesService.imgPrefix;

  constructor(private _MoviesService:MoviesService) {

    // getting popular movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getPopularMovies(i).subscribe( (data) => {
  
        this.popularMovies = this.popularMovies.concat( data.results ) ;
  
      } , (err) => {} )

    }

    // getting latest movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getUpComingMovies(i).subscribe( (data) => {
  
        this.upComingMovies = this.upComingMovies.concat( data.results ) ;
  
      } , (err) => {} )

    }

    // getting now playing movies
    for(let i = 1; i < 5; i++){

      this._MoviesService.getNowPlayingMovies(i).subscribe( (data) => {
  
        this.NowPlayingMovies = this.NowPlayingMovies.concat( data.results ) ;
  
      } , (err) => {} )

    }
    
    // end of constructor
   }

  ngOnInit(): void {
  }

}
