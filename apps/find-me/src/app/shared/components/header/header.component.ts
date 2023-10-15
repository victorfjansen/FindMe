import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly router: Router) { }

  handleNavigate(): void {
    this.router.navigate(['login'])
  }
}
