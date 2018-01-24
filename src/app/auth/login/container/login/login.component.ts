import { Component } from '@angular/core';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="login">
      <div class="mx-auto rounded">
        <login-account></login-account>
        <google-login></google-login>
        <facebook-login></facebook-login>
      </div>
    </div>
  `
})
export class LoginComponent {
  constructor() {}
}
