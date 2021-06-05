import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './main/movies-details/movies-details.component';
import { MoviesViewComponent } from './main/movies-view/movies-view.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { CatalogListComponent } from './main/catalog-list/catalog-list.component';



const routes: Routes = [
  { path: '', component: MovieHeaderComponent },
  { path: '', component: MoviesViewComponent },
  { path: 'catalog' , component: CatalogComponent },
  { path: 'catalog/:listName' , component: CatalogListComponent },
  { path: 'movies-details/:id', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
