import { Component } from '@angular/core';

@Component({
  selector: 'google-login',
  styleUrls: ['google-login.component.scss'],
  template: `
    <div class="google-login">
      <div class="row no-gutters">
        <button type="button" mat-raised-button class="btn btn-sm btn-block">
          <mat-icon>google</mat-icon> Login with Google
        </button>
      </div>
    </div>
  `
})
export class GoogleLoginComponent {
  constructor() {}
}
