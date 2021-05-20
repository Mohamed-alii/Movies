import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


@NgModule({
  declarations: [
    MoviesViewComponent,
    MovieHeaderComponent,
    MoviesDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule
  ],
  exports:[
    MoviesViewComponent,
    MovieHeaderComponent
  ]
})
export class MainModule { }
