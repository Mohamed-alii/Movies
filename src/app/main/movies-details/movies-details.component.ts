import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {
  imgPrefix: string = "https://image.tmdb.org/t/p/w1280";
  movieId
  movie
  similar
  adults
  constructor(private route: ActivatedRoute, private http: MoviesService, private router: Router, private window: Window) {
    this.movieId = this.route.snapshot.params['id']

    this.http.getMovieDetailes(this.movieId).subscribe(data => {
      this.movie = data
      if (this.movie.adult === true) {
        this.adults = "+18"
      }
    })

    this.http.getMoviesVideo(this.movieId).subscribe(data => console.log(data))
    this.http.getSimilarMovies(this.movieId).subscribe(data => this.similar = data)

  }
  customOptions: OwlOptions = {
    stagePadding: 25,
    loop: true,
    slideBy: 4,
    autoplayTimeout: 5000,
    autoplay: true,
    margin: 28,
    dots: true,
    responsive: {
      0: {
        items: 2,
        margin: 8,
        dots: true,
        touchDrag: true,
      },
      600: {
        items: 3,
        touchDrag: true,
      },
      1000: {
        items: 5
      }
    }
  }

  moviesDetailes(id) {
    this.router.navigate(['/movies-details', id]).then(() => {
      this.window.location.reload()
    });
  }
















}
