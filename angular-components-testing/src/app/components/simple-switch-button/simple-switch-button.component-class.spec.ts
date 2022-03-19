import { SimpleSwitchButtonComponent } from './simple-switch-button.component';
import { ButtonState } from './button-state';

describe('SimpleSwitchButtonComponent (class-only)', () => {
  let component: SimpleSwitchButtonComponent;

  beforeEach(() => {
    component = new SimpleSwitchButtonComponent();
  });

  it('should start in off state', () => {
    expect(component.state).toBe(ButtonState.OFF);
  });

  it('should turn on when the off state is toggled', () => {
    component.state = ButtonState.OFF;

    component.toggle();

    expect(component.state).toBe(ButtonState.ON);
  });

  it('should turn off when the on state is toggled', () => {
    component.state = ButtonState.ON;

    component.toggle();

    expect(component.state).toBe(ButtonState.OFF);
  });

  it('should display the correct label for each state', () => {
    component.state = ButtonState.OFF;
    expect(component.buttonLabel).toBe('Turn on');

    component.state = ButtonState.ON;
    expect(component.buttonLabel).toBe('Turn off');
  });

  it('should display the correct color for each state', () => {
    component.state = ButtonState.OFF;
    expect(component.buttonColor).toBe('red');

    component.state = ButtonState.ON;
    expect(component.buttonColor).toBe('green');
  });
});
