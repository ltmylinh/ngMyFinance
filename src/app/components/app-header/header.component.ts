import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from 'store';
import { AppHeaderService } from './../shared/app-header/app-header.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-header',
    styleUrls: ['header.component.scss'],
    template: `
        <div class="header">
          <mat-toolbar color="primary" class="header__toolbar">
            <button mat-icon-button (click)="onToggleSideNav()"><mat-icon>menu</mat-icon></button>
            <h1>My First App</h1>
          </mat-toolbar>
        </div>
    `
})
export class AppHeaderComponent implements OnInit, OnDestroy{

  open: boolean;
  subscription: Subscription;

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
}
