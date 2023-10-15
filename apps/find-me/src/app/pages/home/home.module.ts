import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ButtonModule } from '../../shared/components/button/button.module';
import { HomePageComponent } from './home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }