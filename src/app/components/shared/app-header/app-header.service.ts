import { Injectable } from '@angular/core';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';

@Injectable()
export class AppHeaderService {

  private click$ = new Subject();

  openNav$: Observable<any> = this.click$
    .do((next: boolean) => {
      this.store.set('isOpenNav', next);
    });

  constructor(
    private store: Store
  ) {}

  updateIsOpenNav(value: boolean){
    this.click$.next(value);
  }
}
