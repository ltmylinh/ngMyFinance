import { Component } from '@angular/core';

@Component({
  selector: 'facebook-login',
  styleUrls: ['facebook-login.component.scss'],
  template: `
    <div class="facebook-login">
      <div class="row no-gutters">
        <button type="button" mat-raised-button class="btn btn-sm btn-block">
          Login with Facebook
        </button>
      </div>
    </div>
  `
})
export class FacebookLoginComponent {
  constructor() {}
}
