import { Component } from '@angular/core';
import { ButtonModule } from 'app/shared/components/button/button.module';

@Component({
  selector: 'fm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
  ]
})
export class HomePageComponent { }
