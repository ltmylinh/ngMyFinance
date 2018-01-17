import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="wrapper">
            <app-header (toggleNav)="clickToggleNav()"></app-header>
            <app-nav></app-nav>

        </div>
    `
})
export class AppComponent {
    constructor() {}

    clickToggleNav(){

    }
}
