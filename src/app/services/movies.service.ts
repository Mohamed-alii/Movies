import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  
  constructor(private Http: HttpClient) { }


  getPopularMovies(pageNumber):Observable<any>
  {
    return this.Http.get(`https://api.themoviedb.org/3/trending/movie/week?page=${pageNumber}&api_key=6f24f3712f6a267833075d28fa873be3`)
  }

  
  getUpComingMovies(pageNumber):Observable<any>
  {
    return this.Http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US&page=${pageNumber}`)
  }

  getNowPlayingMovies(pageNumber):Observable<any>
  {
    return this.Http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US&page=${pageNumber}`)
  }

  getMoviesGenres():Observable<any>
  {
    return this.Http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US`)
  }

  getMovieTrailer(movieId):Observable<any>
  {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=6f24f3712f6a267833075d28fa873be3&language=en-US`)
  }

}
