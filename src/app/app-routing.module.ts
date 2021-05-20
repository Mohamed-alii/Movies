import { MovieHeaderComponent } from './main/movie-header/movie-header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './main/movies-details/movies-details.component';
import { MoviesViewComponent } from './main/movies-view/movies-view.component';

const routes: Routes = [
  { path: '', component: MovieHeaderComponent },
  { path: '', component: MoviesViewComponent },
  { path: 'movies-details/:id', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
