import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { BreakpointsEnum } from '../../enums';
import { getResizeEvent$ } from '../../reusable';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isBiggerMediumSize = true;
  isFloatingMenuActivated = false;
  unsubscribe$ = new Subject<void>()

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.handleResizeEvent()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  handleNavigate(): void {
    this.router.navigate(['login'])
  }

  private handleResizeEvent(): void {
    this.getSvgLogo({ currentTarget: { innerWidth: window.innerWidth } } as unknown as Event)
    getResizeEvent$().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: this.handleResizeFunctions.bind(this)
    })
  }

  private handleResizeFunctions(event: Event): void {
    this.getSvgLogo(event)
  }

  private getSvgLogo(event: Event): void {
    const innerWidth = (event.currentTarget as unknown as { innerWidth: number }).innerWidth


    if (innerWidth > BreakpointsEnum.MEDIUM_BREAKPOINT) {
      this.isBiggerMediumSize = true
      return
    }

    this.isBiggerMediumSize = false
  }
}
