import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [InputComponent],
})
export class InputModule {}
