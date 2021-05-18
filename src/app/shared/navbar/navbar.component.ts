import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

  constructor(private breakpointObserver: BreakpointObserver) { }

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
