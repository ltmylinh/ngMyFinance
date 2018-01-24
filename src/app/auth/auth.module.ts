import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Firebase
import { AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';

export const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyD0bgtmuDd-vP0_JhfTpPAEJtcIxhRAXtA",
  authDomain: "my-finance-project.firebaseapp.com",
  databaseURL: "https://my-finance-project.firebaseio.com",
  projectId: "my-finance-project",
  storageBucket: "",
  messagingSenderId: "913868336948"
};

const ROUTES: Routes = [
  { path: 'auth', children: [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: 'login', loadChildren: './login/login.module#LoginModule'}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: []
})

export class AuthModule {}
