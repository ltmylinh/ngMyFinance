import { TestBed } from '@angular/core/testing';

import { Store } from 'store';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });

    service = TestBed.get(AuthService);
  });
  test('AuthService should be existed', () => {
    expect(service).toBeDefined();
  });
});
