import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonModule } from '../button/button.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ButtonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${HeaderComponent.name} SHOULD get correct innerWidth (minorSize) WHEN component initializes`, () => {
    const spyGetSvgLogo = jest.spyOn<any, any>(component, 'getSvgLogo')

    window.innerWidth = 100;
    component.ngOnInit()

    expect(spyGetSvgLogo).toHaveBeenCalled()
    expect(component.isBiggerMediumSize).toBeFalsy()
  })

  it(`${HeaderComponent.name} SHOULD get correct innerWidth (biggerSize) WHEN component initializes`, () => {
    const spyGetSvgLogo = jest.spyOn<any, any>(component, 'getSvgLogo')

    window.innerWidth = 1400;
    component.ngOnInit()

    expect(spyGetSvgLogo).toHaveBeenCalled()
    expect(component.isBiggerMediumSize).toBeTruthy()
  })

  it(`${HeaderComponent.name} SHOULD get correct image accordingly to window size (bigger size)`, () => {
    window.innerWidth = 1440;
    component.ngOnInit()

    fixture.detectChanges()

    const imageElement = fixture.debugElement.query(By.css('.header__container__navigation__logo'))
    const srcImageAttribute = imageElement.attributes['src']

    expect(srcImageAttribute).toStrictEqual('assets/find-me-logo.svg')
  })

  it(`${HeaderComponent.name} SHOULD get correct image accordingly to window size (minor size)`, () => {
    window.innerWidth = 300;
    component.ngOnInit()

    fixture.detectChanges()

    const imageElement = fixture.debugElement.query(By.css('.header__container__navigation__logo'))
    const srcImageAttribute = imageElement.attributes['src']

    expect(srcImageAttribute).toStrictEqual('assets/find-me-logo-text.svg')
  })

  it(`${HeaderComponent.name} SHOULD redirect to login page WHEN some action button was clicked`, () => {
    const spyHandleNavigate = jest.spyOn(component, 'handleNavigate')

    window.innerWidth = 1400;
    component.ngOnInit()

    fixture.detectChanges()

    const joinButtonElement = fixture.debugElement.query(By.css('.join-button'))
    joinButtonElement.triggerEventHandler('clickEvent', null)

    expect(spyHandleNavigate).toHaveBeenCalled()
  })
});
