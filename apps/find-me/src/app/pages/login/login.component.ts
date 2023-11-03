import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'app/shared/components/input/input.component';

import { ButtonModule } from '../../shared/components/button/button.module';
import { PASSWORD_REGEX_PATTERN } from './config/password.config';

@Component({
  selector: 'fm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonModule,
  ]
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl();
  passwordFormControl = new FormControl();

  ngOnInit(): void {
    this.setValidators()
  }

  private setValidators(): void {
    this.emailFormControl.addValidators([Validators.required, Validators.email]);
    this.passwordFormControl.addValidators([Validators.required, Validators.pattern(PASSWORD_REGEX_PATTERN)])
  }
}
