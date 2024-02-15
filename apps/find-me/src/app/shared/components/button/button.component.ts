import { Component, EventEmitter, input, NO_ERRORS_SCHEMA, Output } from '@angular/core';

@Component({
  selector: 'fm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonComponent {
  outline = input<boolean>(false);
  fullPage = input<boolean>(false);
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>()
}