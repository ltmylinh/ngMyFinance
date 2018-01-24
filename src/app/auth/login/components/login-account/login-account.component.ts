import { Component } from '@angular/core';

@Component({
  selector: 'login-account',
  styleUrls: ['login-account.component.scss'],
  template: `
  <auth-form>
    <h1>Login</h1>
    <button mat-raised-button color="primary" type="submit" class="btn btn-sm btn-block">Login</button>
  </auth-form>
  `
})
export class LoginAccountComponent {
  constructor() {}
}
