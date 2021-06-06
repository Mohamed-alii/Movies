import { Component, OnInit , ElementRef , ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-top-scroll',
  templateUrl: './top-scroll.component.html',
  styleUrls: ['./top-scroll.component.scss']
})
export class TopScrollComponent implements OnInit {

  @ViewChild('scrollUp') scrollUp: ElementRef;


  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    if(window.pageYOffset > 500){
      // show the button
      this.scrollUp.nativeElement.style.visibility = "visible";
      this.scrollUp.nativeElement.style.opacity = "1";
    }else{
      this.scrollUp.nativeElement.style.visibility = "hidden";
      this.scrollUp.nativeElement.style.opacity = "0";
    }

  }

  constructor() { }

  scrollBtn(){
    window.scrollTo( 0 , 0);
  }

  ngOnInit(): void {
  }

}
