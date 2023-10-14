import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = 'default';
  @Input() outline = false;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>()
}
