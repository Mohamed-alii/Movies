import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private Http: HttpClient) { }


  getPopularMovies() {
    return this.Http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=6f24f3712f6a267833075d28fa873be3')
}

}
