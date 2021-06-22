import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
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
  navScroll = false;
  userOptionClicked = false;
  isLogin = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchInputResponsive') searchInputResponsive: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  search(eventInfo) {
    let userSearch = this.searchInput.nativeElement.value;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/search/${userSearch}`])
    });
    return false;
  }

  searchResponsive(eventInfo) {
    let userSearch = this.searchInputResponsive.nativeElement.value;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/search/${userSearch}`])
    });
    return false;
  }



  showUserOption() {
    this.userOptionClicked = !this.userOptionClicked
  }

  @HostListener("window:scroll")
  hide() {
    if (window.scrollY > 10) {
      this.userOptionClicked = false
      this.navScroll = true
    } else {
      this.navScroll = false
    }
  }














}
