import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
  declarations: [
    MoviesViewComponent,
    MovieHeaderComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule
  ],
  exports:[
    MoviesViewComponent,
    MovieHeaderComponent,
    CatalogComponent
  ]
})
export class MainModule { }
