import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() outline = false;
  @Input() fullPage = false;
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>()
}