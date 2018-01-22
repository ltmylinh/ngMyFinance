import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <div class="mat-app-background basic-container">
        <div class="container-fluid pl-0 pr-0">
          <app-header
          (toggleNav)="clickToggleNav()">
          </app-header>
          <app-nav>
          </app-nav>
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
