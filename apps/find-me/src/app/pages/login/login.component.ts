import { Component, DestroyRef, NO_ERRORS_SCHEMA, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'app/shared/components/input/input.component';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { PASSWORD_REGEX_PATTERN } from './config/password.config';
import { NgOptimizedImage } from '@angular/common';
import { BreakpointsEnum, getResizeEvent$ } from 'app/shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgOptimizedImage
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl();
  passwordFormControl = new FormControl();

  isMediumSize = signal<boolean>(false);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.setValidators()
    this.getWindowSize()
  }

  private setValidators(): void {
    this.emailFormControl.addValidators([Validators.required, Validators.email]);
    this.passwordFormControl.addValidators([Validators.required, Validators.pattern(PASSWORD_REGEX_PATTERN)])
  }

  private getWindowSize(): void {
    getResizeEvent$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: this.handleResizeFunctions.bind(this),
      });
  }

  private handleResizeFunctions(event: Event): void {
    this.getSvgLogo(event);
  }

  private getSvgLogo(event: Event): void {
    const innerWidth = (
      event.currentTarget as unknown as { innerWidth: number }
    ).innerWidth;

    this.isMediumSize.set(!!(innerWidth < BreakpointsEnum.MEDIUM_BREAKPOINT))
  }
}
