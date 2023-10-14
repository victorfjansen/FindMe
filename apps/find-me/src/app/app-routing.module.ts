import { Route } from '@angular/router';
import { FindMeContainerComponent } from './container';
import { HomePageComponent } from './pages/home/home.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: FindMeContainerComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];
