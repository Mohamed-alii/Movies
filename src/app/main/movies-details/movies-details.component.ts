import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent{
  imgPrefix: string = "https://image.tmdb.org/t/p/w1280";
  movieId
  movie
  similar
  adults
  constructor(private route: ActivatedRoute , private http :MoviesService) {
    this.movieId = this.route.snapshot.params['id']

    this.http.getMovieDetailes(this.movieId).subscribe(data => {
      this.movie = data
      if (this.movie.adult === true) {
        this.adults="+18"
      }
    })
    
    this.http.getMoviesVideo(this.movieId).subscribe( data => console.log(data))
    this.http.getSimilarMovies(this.movieId).subscribe(data => this.similar = data)
    
  }

 

}
