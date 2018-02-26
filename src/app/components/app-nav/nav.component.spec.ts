import {
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { AngularMaterialModule } from './../../common-modules/angular-material.module';
import { AppNavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppNavComponent],
      imports: [AngularMaterialModule]
    });

    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
  });

  test('AppNavComponent should be existed', () => {
    expect(component).toBeDefined();
  });
});
