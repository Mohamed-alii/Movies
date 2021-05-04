import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesViewComponent } from './movies-view/movies-view.component';



@NgModule({
  declarations: [
    MoviesViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MoviesViewComponent
  ]
})
export class MainModule { }
