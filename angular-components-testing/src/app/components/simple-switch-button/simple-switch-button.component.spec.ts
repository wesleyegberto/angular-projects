import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSwitchButtonComponent } from './simple-switch-button.component';
import { ButtonState } from './button-state';

describe('SimpleSwitchButtonComponent', () => {
  let component: SimpleSwitchButtonComponent;
  // fixture is a helper to interate with the component and its element
  let fixture: ComponentFixture<SimpleSwitchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ SimpleSwitchButtonComponent ]
      })
      .compileComponents();

    // creates the component and addes it to test-runner DOM
    fixture = TestBed.createComponent(SimpleSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start displaying a button with text `Turn on` and with red color', () => {
    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();

    expect(button.nativeElement.innerText).toBe('Turn on');
    expect(button.nativeElement.textContent).toBe('Turn on');
    expect(button.nativeNode.innerText).toBe('Turn on');

    // testing the style with nativeElement and debugElement
    expect(button.nativeElement.style.backgroundColor).toBe('red');
    expect(button.styles.backgroundColor).toBe('red');
  });

  it('should display text `Turn on` and be red when state is off', () => {
    component.state = ButtonState.OFF;

    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

    expect(button.nativeElement.innerText).toBe('Turn on');
    expect(button.styles.backgroundColor).toBe('red');
  });

  it('should display text `Turn off` and be green when state is on', () => {
    component.state = ButtonState.ON;

    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

    expect(button.nativeElement.innerText).toBe('Turn off');
    expect(button.styles.backgroundColor).toBe('green');
  });

  it('should change the button text and color when clicked', () => {
    component.state = ButtonState.OFF;
    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.nativeElement.innerText).toBe('Turn off');
    expect(button.styles.backgroundColor).toBe('green');

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.nativeElement.innerText).toBe('Turn on');
    expect(button.styles.backgroundColor).toBe('red');
  });
});
