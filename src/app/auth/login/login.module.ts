import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//container component
import { LoginComponent } from './container/login/login.component';

//components
// import { LoginAccountComponent } from './components/login-account/login-account.component';
import { FacebookLoginComponent } from './components/facebook/facebook-login.component';
import { GoogleLoginComponent } from './components/google/google-login.component';

//shared module
import { SharedModule } from '../../auth/shared/shared.module';
import { AngularMaterialModule } from './../../common-modules/angular-material.module';


const ROUTES: Routes = [
  { path: '', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    AngularMaterialModule
  ],
  declarations: [
    LoginComponent,
    FacebookLoginComponent,
    GoogleLoginComponent
  ],
  providers: []
})
export class LoginModule {}
