import { Component } from '@angular/core';
import { ButtonComponent } from 'app/shared/components/button/button.component';

@Component({
  selector: 'fm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
  ]
})
export class HomePageComponent { }
