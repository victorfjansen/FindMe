import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FindMeContainerComponent } from './container';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: FindMeContainerComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(c => c.HomePageComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then(c => c.LoginComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
