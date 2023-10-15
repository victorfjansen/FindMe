import { NgModule } from '@angular/core';

import { ButtonModule } from '../../shared/components/button/button.module';
import { HomePageComponent } from './home.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    ButtonModule
  ]

})
export class HomeModule { }