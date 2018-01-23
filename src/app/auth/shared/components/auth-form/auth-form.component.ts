import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="auth-form">
      <form [formGroup]="form" (onSubmit)="onSubmit()">
        <div class="form-group">
          <mat-form-field>
            <input matInput type="email" id="email1" class="form-control" formControlName="email" placeholder="Enter your email">
          </mat-form-field>
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" formControlName="email" placeholder="Enter your email" />
        </div>
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
    this.form = fb.group([
      { email: ['', Validators.email]}
    ])
  }

  onSubmit(){
    this.submitted.emit(this.form.value);
  }
}
