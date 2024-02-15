import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMeContainerComponent } from './container';
import { HeaderComponent } from './shared';

@NgModule({
  declarations: [AppComponent, FindMeContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
})
export class AppModule { }
