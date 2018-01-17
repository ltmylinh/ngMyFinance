import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Store } from 'store';
//common-modules
import { AngularMaterialModule } from './common-modules/angular-material.module';

//shared modules
import { SharedModule } from './components/shared/shared.module';

//containers
import { AppComponent } from './containers/app/app.component';

//components
import { AppHeaderComponent } from './components/app-header/header.component';
import { AppNavComponent } from './components/app-nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        SharedModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppNavComponent
    ],
    providers: [
      Store
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
