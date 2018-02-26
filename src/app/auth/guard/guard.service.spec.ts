import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './guard.service';

describe('Auth Guard service', () => {

  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });

    service = TestBed.get(AuthGuard);
  });

  test('Auth Guard service should be existed', () => {
    expect(service).toBeDefined();
  });

});
