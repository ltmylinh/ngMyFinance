import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './container/dashboard/dashboard.component';

import { SharedModule } from './shared/shared.module';

const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule {}
