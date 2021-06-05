import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';


@NgModule({
  declarations: [
    MoviesViewComponent,
    MovieHeaderComponent,
    CatalogComponent,
    MoviesDetailsComponent,
    CatalogListComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule
  ],
  exports:[
    MoviesViewComponent,
    MovieHeaderComponent,
    CatalogComponent,
    MoviesDetailsComponent,
    CatalogListComponent
  ]
})
export class MainModule { }
