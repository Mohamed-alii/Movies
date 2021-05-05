import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss']
})
export class MovieHeaderComponent {

  constructor() { }

  customOptions: OwlOptions ={
    stagePadding: 50,
    loop: true,
    touchDrag: false,
    margin: 10,
    nav: true,
    
    navText: ['next', 'pev'],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }



}
