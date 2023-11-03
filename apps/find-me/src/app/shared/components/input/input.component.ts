import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'fm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit, OnChanges, OnDestroy {
  @Input() formControlName = '';
  @Input() errorMessage = '';

  isErrorMessageEnabled = false;
  currentFormControl: FormControl = new FormControl();

  unsubscribe$ = new Subject<void>();

  constructor(private readonly controlContainer: ControlContainer) {}

  ngOnChanges(): void {
    this.getCurrentFormControl(this.formControlName);
  }

  ngOnInit(): void {
    this.getCurrentFormControl(this.formControlName);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getCurrentFormControl(formControlName: string): void {
    this.controlContainer.valueChanges?.subscribe({
      next: (value) => console.log(value),
    });
  }
}
