import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from './app/auth/shared/services/auth/auth.service';
import { Monthly } from './app/dashboard/shared/services/monthly-chart/monthly-chart.service';

export interface State{
  [key: string]: any,
  isOpenNav: boolean,
  user: User,
  monthly: Monthly[]
}

const state: State = {
  isOpenNav: undefined,
  user: undefined,
  monthly: undefined
}

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
