import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="auth-form">
      <ng-content select="h1"></ng-content>
      <form [formGroup]="form" (onSubmit)="onSubmit()" novalidate>
        <div class="form-group">
          <label for="email">Email</label>
          <input matInput type="email" id="email" class="form-control form-control-sm" formControlName="email" placeholder="Enter your email" />
          <div class="error" *ngIf="emailRequired">
            Email is required.
          </div>
          <div class="error" *ngIf="emailFormat">
            Email is incorrect format.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input matInput type="password" id="password" class="form-control form-control-sm" formControlName="password" placeholder="Enter your password" />
          <div class="error" *ngIf="passwordRequired">
            Password is required.
          </div>
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
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  get emailRequired(){
    const control = this.form.get('email');
    return control.touched && control.hasError('required');
  }

  get emailFormat(){
    const control = this.form.get('email');
    return control.touched && control.value.length > 0 && control.hasError('email');
  }

  get passwordRequired(){
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  onSubmit(){
    if(this.form.valid){
      this.submitted.emit(this.form);
    }
  }
}
