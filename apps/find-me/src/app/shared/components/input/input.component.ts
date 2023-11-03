import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { INPUT_TYPES } from './types/input.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule
  ]
})
export class InputComponent {
  @Input() formControl: FormControl = new FormControl();
  @Input() inputType: INPUT_TYPES = 'text';
  @Input() inputName = '';
  @Input() errorMessage = '';

  isErrorMessageEnabled = false;
  currentFormControl: FormControl = new FormControl();
}
