import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'facebook-login',
  styleUrls: ['facebook-login.component.scss'],
  template: `
    <div class="facebook-login">
      <div class="row no-gutters">
        <button type="button" mat-raised-button class="btn btn-sm btn-block" (click)="onLoginFacebook()">
          Login with Facebook
        </button>
      </div>
    </div>
  `
})
export class FacebookLoginComponent {
  @Output()
    fbLogin = new EventEmitter<any>();

  constructor() {}

  onLoginFacebook(){
    this.fbLogin.emit();
  }
}
