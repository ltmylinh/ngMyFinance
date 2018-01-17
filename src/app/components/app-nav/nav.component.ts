import { Component, OnInit} from '@angular/core';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-nav',
    styleUrls: ['nav.component.scss'],
    templateUrl: 'nav.component.html'
})
export class AppNavComponent implements OnInit{
  open: boolean;

  constructor(
    private store: Store
  ) {}

  ngOnInit(){
    this.store.select('isOpenNav').subscribe((value: boolean) => this.open = value);
  }

}
