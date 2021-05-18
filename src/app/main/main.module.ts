import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MoviesViewComponent,
    MovieHeaderComponent
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
