import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss']
})
export class MovieHeaderComponent {
  popularMovies
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(private Http: MoviesService) {
    
    setTimeout(() => {
      this.Http.getPopularMovies(1).subscribe(data => {
        console.log(data)
        this.popularMovies = data
      }) 
    },4000)
  }

  customOptions: OwlOptions = {
    stagePadding: 100,
    loop: true,
    touchDrag: true,
    slideBy: 4,
    autoplayTimeout: 5000,
    autoplay:true,
    margin: 30,
    nav: false,
    navText: ['<', '>'],
    dots: true,
    responsive: {
      0: {
        items: 1,
        dots:false,
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  }



}
