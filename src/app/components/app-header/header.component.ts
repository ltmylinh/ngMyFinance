import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    styleUrls: ['header.component.scss'],
    template: `
        <div class="header">
          <mat-toolbar color="primary" class="header__toolbar">
            <button mat-icon-button (click)="onToggleSideNav()"><mat-icon>menu</mat-icon></button>
            <h1 class="example-app-name">Responsive App</h1>
          </mat-toolbar>
        </div>
    `
})
export class AppHeaderComponent {
    @Output()
      toggleNav = new EventEmitter<any>();

    constructor() {}

    onToggleSideNav(){
      this.toggleNav.emit();
    }
}
