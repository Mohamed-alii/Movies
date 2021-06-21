import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { TopScrollComponent } from './top-scroll/top-scroll.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, SpinnerComponent, FooterComponent, TopScrollComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule

  ],
  exports:[NavbarComponent , SpinnerComponent , FooterComponent , TopScrollComponent]
})
export class SharedModule { }
