import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  imgPrefix: string = "https://image.tmdb.org/t/p/w500";

  constructor(private Http: HttpClient) { }

  getMoviesVideo(id) {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US`)
  }

  getMovieDetailes(id) {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US`)
  }
  getSimilarMovies(id) {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US&page=1`)
  }





  getPopularMovies(pageNumber): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/trending/movie/week?page=${pageNumber}&api_key=6f24f3712f6a267833075d28fa873be3`)
  }


  getUpComingMovies(pageNumber): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US&page=${pageNumber}`)
  }

  getNowPlayingMovies(pageNumber): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US&page=${pageNumber}`)
  }

}
