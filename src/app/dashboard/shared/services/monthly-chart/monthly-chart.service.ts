import { Injectable } from '@angular/core';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';

export interface Monthly{
  month: number,
  total: number,
  $key: string,
  $exist: () => boolean
}

@Injectable()
export class MonthlyChartService {

  constructor(
    private store: Store
  ) {}
}
