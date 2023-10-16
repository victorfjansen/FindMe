import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindMeContainerComponent } from './find-me.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '../../shared';

describe('FindMeContainerComponent', () => {
  let component: FindMeContainerComponent;
  let fixture: ComponentFixture<FindMeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindMeContainerComponent],
      imports: [HeaderModule, RouterTestingModule]
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
