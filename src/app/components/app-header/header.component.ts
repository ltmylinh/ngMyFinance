import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Store } from 'store';
import { AppHeaderService } from './../shared/app-header/app-header.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-header',
    styleUrls: ['header.component.scss'],
    templateUrl: 'header.component.html'
})
export class AppHeaderComponent implements OnInit, OnDestroy{

  open: boolean;
  subscription: Subscription;
  toggleSearch: boolean = false;

  constructor(
    private headerService: AppHeaderService,
    private store: Store
  ) {}

  ngOnInit(){
    this.subscription = this.headerService.openNav$.subscribe((value: any) => {
      value === undefined ? this.open = true : this.open = value;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onToggleSideNav(){
    const newValue = !this.open;
    this.headerService.updateIsOpenNav(newValue);
  }

  toggle(){
    this.toggleSearch = !this.toggleSearch;
  }
}
