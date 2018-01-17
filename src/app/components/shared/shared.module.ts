import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//services
import { AppHeaderService } from './app-header/app-header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [AppHeaderService]
    }
  }
}
