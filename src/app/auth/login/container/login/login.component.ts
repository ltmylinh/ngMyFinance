import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="login">
      <div class="mx-auto rounded">
        <login-account></login-account>
        <google-login (gLogin)="googleLogin()"></google-login>
        <facebook-login (fbLogin)="facebookLogin()"></facebook-login>
      </div>
    </div>
  `
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  facebookLogin(){
    this.authService.facebookLogin();
    //this.router.navigate(['dashboard']);
  }

  async googleLogin(){
    await this.authService.googleLogin();
    this.router.navigate(['dashboard']);
  }
}
