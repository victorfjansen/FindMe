import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMeContainerComponent } from './container';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    FindMeContainerComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HomeModule, HeaderModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
