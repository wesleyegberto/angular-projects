import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsOutputsTestingComponent } from './inputs-outputs-testing.component';

describe('InputsOutputsTestingComponent', () => {
  let fixture: ComponentFixture<InputsOutputsTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsOutputsTestingComponent ]
    });

    fixture = TestBed.createComponent(InputsOutputsTestingComponent);
    fixture.detectChanges();
  });

  it('should set using @Input', () => {
    // set the objet using input
    fixture.componentInstance.element = { id: 42, name: 'Adam' };
    // initiate data binding
    fixture.detectChanges();

    // verifies if it setted correctly
    expect(fixture.componentInstance.externalElement.externalName)
      .toBe('Adam');
  });

  it('should emit @Output in process', () => {
    fixture.componentInstance.element = { id: 42, name: 'Adam' };
    fixture.detectChanges();

    let receivedElement = null;
    // subscribes to @Output to capture the event argument
    fixture.componentInstance.processed.subscribe((el: any) => receivedElement = el);

    fixture.componentInstance.process();

    expect(receivedElement.externalName).toBe('Adam');
  });
});
