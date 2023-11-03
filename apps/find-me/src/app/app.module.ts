import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMeContainerComponent } from './container';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './shared/components/header/header.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [AppComponent, FindMeContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    LoginModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
