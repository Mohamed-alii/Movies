import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './main/movies-details/movies-details.component';
import { MoviesViewComponent } from './main/movies-view/movies-view.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { CatalogListComponent } from './main/catalog-list/catalog-list.component';
import { SearchComponent } from './main/search/search.component';
import { ActorDetailsComponent } from './main/actor-details/actor-details.component';



const routes: Routes = [
  { path: '', component: MovieHeaderComponent },
  { path: '', component: MoviesViewComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'catalog' , component: CatalogComponent },
  { path: 'catalog/:listName' , component: CatalogListComponent },
  { path: 'movies-details/:id', component: MoviesDetailsComponent },
  { path: 'actor-details/:id', component: ActorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
