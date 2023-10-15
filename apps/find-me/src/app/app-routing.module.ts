import { Route, RouterModule } from '@angular/router';

import { FindMeContainerComponent } from './container';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: FindMeContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
