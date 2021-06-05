import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  imgPrefix = this.moviesService.imgPrefix;
  nowPlayingPic:String;
  popularPic:String;
  topRatedPic:string;
  upComingPic:String;
  trendingTvPic:String;
  trendingMoviePic:String;



  constructor( private moviesService:MoviesService ) {

    // getting now playing first movie picture
    this.moviesService.getNowPlayingMovies("1").subscribe( (data) => {

      this.nowPlayingPic = data.results[0].backdrop_path;
      
      console.log("now playing =>" , this.nowPlayingPic)
      
    } , (err) => {} )

    // getting popular first movie picture
    this.moviesService.getPopularMovies("1").subscribe( (data) => {

      this.popularPic = data.results[0].backdrop_path;
      console.log("now poular =>" , this.popularPic)

    } , (err) => {} )

    // getting top rated first movie picture
    this.moviesService.getTopRatedMovies("1").subscribe( (data) => {

      this.topRatedPic = data.results[0].backdrop_path;
      console.log("now toprated =>" , this.topRatedPic)

    } , (err) => {} )

    // getting up coming first movie picture
    this.moviesService.getUpComingMovies("1").subscribe( (data) => {

      this.upComingPic = data.results[0].backdrop_path;
      console.log("up playing =>" , this.upComingPic)

    } , (err) => {} )


    // getting trending tv first movie picture
    this.moviesService.getTrendingTvs().subscribe( (data) => {

      this.trendingTvPic = data.results[0].backdrop_path;
      console.log("now trending tv =>" , this.trendingTvPic)

    } , (err) => {} )

    // getting trending movie first movie picture
    this.moviesService.getTrendingMovies().subscribe( (data) => {

      this.trendingMoviePic = data.results[0].backdrop_path;
      console.log("now trending movies =>" , this.trendingMoviePic)

    } , (err) => {} )
    

    // end of constructor
   }

  ngOnInit(): void {
  }

}
