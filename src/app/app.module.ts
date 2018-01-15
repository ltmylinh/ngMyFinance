import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//containers
import { AppComponent } from './containers/app/app.component';

//components
import { AppHeaderComponent } from './components/app-header/header.component';
import { AppNavComponent } from './components/app-nav/nav.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppNavComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    
}