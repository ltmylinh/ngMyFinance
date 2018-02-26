import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { AngularMaterialModule } from './../../../../common-modules/angular-material.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
      declarations: [LoginComponent],
      providers: [{}]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  test('LoginComponent exist', () => {
    expect(component).toBeDefined();
  });
});


