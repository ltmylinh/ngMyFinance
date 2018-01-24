import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="auth-form">
          <ng-content select="h1"></ng-content>
          <form [formGroup]="form" (onSubmit)="onSubmit()">
            <div class="form-group">
              <label for="email">Email</label>
              <input matInput type="email" id="email" class="form-control form-control-sm" formControlName="email" placeholder="Enter your email" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input matInput type="password" id="password" class="form-control form-control-sm" formControlName="password" placeholder="Enter your password" />
            </div>
            <ng-content select="button"></ng-content>
          </form>
    </div>
  `
})
export class AuthFormComponent {
  @Output()
    submitted = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted.emit(this.form.value);
  }
}
