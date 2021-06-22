import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w1280';
  movieId;
  movie;
  similar;
  adults;
  trailer;
  trailerUrl;
  url;
  reviews;
  read = false;
  actors;
  constructor(
    private route: ActivatedRoute,
    private http: MoviesService,
    private router: Router,
    private window: Window,
    private sanitizer: DomSanitizer
  ) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  
    this.movieId = this.route.snapshot.params['id'];

    this.http.getMovieDetailes(this.movieId).subscribe((data) => {
      this.movie = data;
      if (this.movie.adult === true) {
        this.adults = '+18';
      }
    });

    this.http
      .getSimilarMovies(this.movieId)
      .subscribe((data) => (this.similar = data));
    this.http.getMovieTrailer(this.movieId).subscribe((data) => {
      this.trailer = data;
      this.trailerUrl = `https://www.youtube.com/embed/${this.trailer.results[0].key}`;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerUrl);
    });

    this.http.getMovieReveiw(this.movieId).subscribe((data) => {
      console.log(data);
      this.reviews = data;
    });

    this.http
      .getMovieActors(this.movieId)
      .subscribe((data) => (this.actors = data));
  }

  customOptions: OwlOptions = {
    stagePadding: 25,
    loop: true,
    slideBy: 4,
    autoplayTimeout: 6000,
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
      400: {
        items: 3,
        touchDrag: true,
      },
      600: {
        items: 3,
        touchDrag: true,
      },
      1000: {
        items: 5,
      },
    },
  };

  moviesDetailes(id) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/movies-details', id]);
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  makeUserRead(id, text) {
    this.read = !this.read;
    let prop = this.read === true ? 'auto' : '85px';
    document.getElementById(id).style.height = prop;
    text.target.innerText = this.read === true ? 'Read Less' : 'Read More ';
  }
}
