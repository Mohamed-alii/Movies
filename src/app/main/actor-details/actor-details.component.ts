import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w1280';
  actor
  movies
  images
  actorId;
  constructor(private route: ActivatedRoute, private http: MoviesService,private router: Router) {
    this.actorId = this.route.snapshot.params['id'];
    this.http.getActorDetails(this.actorId).subscribe(data => this.actor = data)
    this.http.getActorMovies(this.actorId).subscribe(data => this.movies = data)
this.http.getActorImages(this.actorId).subscribe(data => this.images = data)


    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });


  }

  customOptions: OwlOptions = {

    stagePadding: 25,
    slideBy: 4,
    autoplayTimeout: 6000,
    autoplay: true,
    margin: 25,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 8,
        dots: false,
        touchDrag: true,
      },
      400: {
        items: 3,
        touchDrag: true,
      },
      600: {
        items: 4,
        touchDrag: true,
      },
      800: {
        items: 5,
        touchDrag: true,
      },
      1000: {
        autoWidth: true,
        touchDrag: true,
        items: 4,
      },
    },
  };

  customOptionsPhotos: OwlOptions = {

    loop: false,
    slideBy: 1,
    autoplayTimeout: 4000,
    autoplay: true,
    margin: 28,
    dots: false,
    responsive: {
      
      0: {
        items: 3,
        margin: 20,
     
        touchDrag: true,
      },
      300: {
        items: 3,
        margin: 20,
        touchDrag: true,
      },
      400: {
        items: 5,
        margin: 20,
        stagePadding: 1000,
        autoWidth: true,
        touchDrag: true,
      },
      800: {
        items: 5,
        autoWidth: true,
        margin: 25,
        touchDrag: true,
      },
 
    },
  };


















  moviesDetailes(id) {
    this.router.navigate(['/movies-details', id])
  }


}
