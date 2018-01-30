import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  styleUrls: ['register.component.scss'],
  template: `
    <div class="register">
      <div class="mx-auto rounded">
        <auth-form (submitted)="createAccount($event)">
          <h1>Sign up</h1>
          <button mat-raised-button color="warn" type="submit" class="btn btn-sm btn-block">Sign up</button>
        </auth-form>
      </div>
    </div>
  `
})
export class RegisterComponent {
  constructor() {}
}
