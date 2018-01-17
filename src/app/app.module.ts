import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//common-modules
import { AngularMaterialModule } from './common-modules/angular-material.module';

//containers
import { AppComponent } from './containers/app/app.component';

//components
import { AppHeaderComponent } from './components/app-header/header.component';
import { AppNavComponent } from './components/app-nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularMaterialModule
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
