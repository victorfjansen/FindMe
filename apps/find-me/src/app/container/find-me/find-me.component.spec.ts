import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonComponent, HeaderComponent } from '../../shared';
import { FindMeContainerComponent } from './find-me.component';
import { CommonModule } from '@angular/common';

describe('FindMeContainerComponent', () => {
  let component: FindMeContainerComponent;
  let fixture: ComponentFixture<FindMeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindMeContainerComponent],
      imports: [HeaderComponent, CommonModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FindMeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${FindMeContainerComponent.name} SHOULD contain the fm-header component`, () => {
    const headerElement = fixture.debugElement.query(By.directive(HeaderComponent))
    expect(!!headerElement).toBeTruthy()
  })
});
