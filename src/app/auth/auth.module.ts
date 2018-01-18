import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

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
    SharedModule.forRoot()
  ],
  declarations: [],
  providers: []
})

export class AuthModule {}
