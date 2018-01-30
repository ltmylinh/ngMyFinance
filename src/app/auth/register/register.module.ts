import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularMaterialModule } from './../../common-modules/angular-material.module';
import { SharedModule } from '../../auth/shared/shared.module';

import { RegisterComponent } from './container/register.component';

export const ROUTES: Routes = [
  { path: '', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
