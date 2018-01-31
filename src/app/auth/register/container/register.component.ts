import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'register',
  styleUrls: ['register.component.scss'],
  template: `
    <div class="register gl-form">
      <div class="mx-auto rounded">
        <auth-form (submitted)="createAccount($event)">
          <h1>Sign up</h1>
          <button mat-raised-button color="warn" type="submit" class="btn btn-sm btn-block">Sign up</button>
          <div class="error">{{error}}</div>
          <div class="footer_text">
            Already have an account? <a routerLink="/auth/login">Log in</a>
          </div>
        </auth-form>
      </div>
    </div>
  `
})
export class RegisterComponent {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async createAccount(form: FormGroup){
    const { email, password } = form.value;
    await this.authService.createAccountWithEmailPassword(email, password)
      .catch(error => this.error = error.message);
    this.router.navigate(['dashboard']);
  }
}
