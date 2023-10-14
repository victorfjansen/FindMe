import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

}