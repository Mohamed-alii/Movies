import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    MoviesViewComponent,
    MovieHeaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports:[
    MoviesViewComponent,
    MovieHeaderComponent
  ]
})
export class MainModule { }
