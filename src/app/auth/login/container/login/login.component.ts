import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="login gl-form">
      <div class="mx-auto rounded">
        <auth-form (submitted)="loginAccount($event)">
          <h1>Log in to my app</h1>
          <button mat-raised-button color="primary" type="submit" class="btn btn-sm btn-block">Login</button>
          <div class="error">{{error}}</div>
        </auth-form>
        <google-login (gLogin)="googleLogin()"></google-login>
        <facebook-login (fbLogin)="facebookLogin()"></facebook-login>
        <div class="footnote">
          Don't have an account? <a routerLink="/auth/register">Sign up</a>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async facebookLogin(){
    await this.authService.facebookLogin();
    this.router.navigate(['dashboard']);
  }

  async googleLogin(){
    await this.authService.googleLogin();
    this.router.navigate(['dashboard']);
  }

  async loginAccount(event: FormGroup){
    const { email, password } = event.value;
    await this.authService.loginWithAccount(email, password)
      .catch(error => this.error = error.message);
    this.router.navigate(['dashboard']);
  }
}
