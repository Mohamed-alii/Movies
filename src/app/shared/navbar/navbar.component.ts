import { Component, HostListener , ElementRef , ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userOptionClicked = false;
  cateOptionClicked = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChild('searchInput') searchInput: ElementRef;


  constructor(private breakpointObserver: BreakpointObserver , private router:Router) { }

  search(eventInfo)
  {
    let userSearch = this.searchInput.nativeElement.value;

    this.router.navigateByUrl( '/' , {skipLocationChange: true } ).then( () => {
      this.router.navigate([ `/search/${userSearch}` ])
    });

  }

  showUserOption() {
    this.userOptionClicked = !this.userOptionClicked
  }
  showCateOption() {
    this.cateOptionClicked = !this.cateOptionClicked
  }



  @HostListener("window:scroll")
  hide() {
    if (window.scrollY > 10) {
      this.userOptionClicked = false
      this.cateOptionClicked=false
}
  }












}
