import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<fm-button>generic text</fm-button>`,
})
class TestHostComponent { }

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ButtonComponent.name} SHOULD emit the clickEvent WHEN has been clicked`, () => {
    const spyEmitter = jest.spyOn(component.clickEvent, 'emit')

    const buttonElement = fixture.debugElement.query(By.css('.main-button'))
    buttonElement.triggerEventHandler('click', null)

    expect(!!buttonElement).toBeTruthy()
    expect(spyEmitter).toHaveBeenCalled()
  })

  it(`${ButtonComponent.name} SHOULD have a correct label accordingly to the input property`, () => {
    const textFixture = TestBed.createComponent(TestHostComponent)

    fixture.detectChanges()

    const buttonElement = (<HTMLButtonElement>textFixture.debugElement.query(By.css('.main-button')).nativeElement)
    expect(buttonElement.textContent).toStrictEqual('generic text')
  })
});
