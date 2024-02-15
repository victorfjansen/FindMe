import { NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';

import { BreakpointsEnum } from '../../enums';
import { getResizeEvent$ } from '../../reusable';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    NgOptimizedImage,
    RouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderComponent implements OnInit {
  isBiggerMediumSize = true;
  isFloatingMenuActivated = false;

  router = inject(Router);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.handleResizeEvent();
  }

  handleNavigate(): void {
    this.router.navigate(['login']);
    this.isFloatingMenuActivated = false;
  }

  private handleResizeEvent(): void {
    this.getSvgLogo({
      currentTarget: { innerWidth: window.innerWidth },
    } as unknown as Event);

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

    this.isBiggerMediumSize = !!(innerWidth > BreakpointsEnum.MEDIUM_BREAKPOINT)
  }
}
