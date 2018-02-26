import {
  TestBed,
  ComponentFixture,
  async
} from '@angular/core/testing';

import { AppHeaderComponent } from './header.component';
import { AppHeaderService } from './../shared/app-header/app-header.service';
import { AngularMaterialModule } from './../../common-modules/angular-material.module';

describe('HeaderComponent', () => {
  let component: AppHeaderComponent;
  let appHeaderServiceStub = {};
  let appHeaderService: any;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
      declarations: [AppHeaderComponent],
      providers: [{ provide: AppHeaderService, useValue: appHeaderServiceStub }]
    });

    appHeaderService = TestBed.get(AppHeaderService);
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
  });

  test('appHeaderService and appHeaderServiceStub are different', () => {

    expect(appHeaderService === appHeaderServiceStub).toBe(false);
  });

  test('test support snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

});
