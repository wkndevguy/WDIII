import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AuthService } from '@svc/auth/auth.service';

@Input('email')
@Input('pw')
//@Input('sideNavButtonIcon')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') public sideNav: MatSidenav;
  
  title = 'SHOPBOT';
  email: string;
  pw: string;
  arrow: string;

  constructor(public authService: AuthService) {
    this.arrow = 'remove';
  }
  
    signUp() {
      this.authService.signUp(this.email, this.pw);
      this.email = this.pw = '';
    }
  
    logIn() {
      this.authService.logIn(this.email, this.pw);
      this.email = this.pw = '';    
    }
  
    logOut() {
      this.authService.logOut();
    }
    sidenavToggle() {
      this.sideNav.toggle();
      if(!this.sideNav.opened) {
        this.arrow = 'add';
      } else {
        this.arrow = 'remove';
      }
    }
}

