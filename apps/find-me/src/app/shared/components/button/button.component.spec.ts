import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
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
    const genericLabel = 'genericLabel'

    component.label = genericLabel
    fixture.detectChanges()

    const buttonElement = (<HTMLButtonElement>fixture.debugElement.query(By.css('.main-button')).nativeElement)
    expect(buttonElement.innerHTML.trim()).toStrictEqual(genericLabel)
  })
});
