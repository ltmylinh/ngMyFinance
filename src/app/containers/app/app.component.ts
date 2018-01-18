import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <div class="wrapper">
          <app-header
            (toggleNav)="clickToggleNav()">
          </app-header>
          <app-nav>
          </app-nav>
          <div class="main-container">
            <router-outlet></router-outlet>
          </div>
      </div>
    `
})
export class AppComponent {

  isOpenNav = true;

  constructor() {}

  clickToggleNav(){
    this.isOpenNav = !this.isOpenNav;
  }
}
