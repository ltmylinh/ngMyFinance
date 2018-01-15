import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="wrapper">
            <app-header></app-header>
            <app-nav></app-nav>
            <div class="container">
                <h1>hello</h1>
            </div>
        </div>
    `
})
export class AppComponent {
    constructor() {}
}