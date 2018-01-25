import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from 'store';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { AuthService, User } from './../../auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <div class="mat-app-background basic-container">
        <div class="container-fluid pl-0 pr-0">
          <app-header
          (toggleNav)="clickToggleNav()"
          (logout)="logoutUser()">
          </app-header>
          <app-nav>
          </app-nav>
        </div>
      </div>
    `
})
export class AppComponent implements OnInit, OnDestroy{

  user$: Observable<User>;
  isOpenNav = true;
  subscribtion: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(){
    this.subscribtion = this.authService.auth$.subscribe();
    this.user$ = this.store.select('user');
    this.user$.subscribe(user => console.log(user));
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

  clickToggleNav(){
    this.isOpenNav = !this.isOpenNav;
  }

  logoutUser(){
    this.authService.signout();
  }
}
