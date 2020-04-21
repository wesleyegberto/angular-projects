import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs-testing',
  templateUrl: './inputs-outputs-testing.component.html'
})
export class InputsOutputsTestingComponent {
  public externalElement: any;

  @Output() processed = new EventEmitter<any>();

  @Input('element')
  set element(element: any) {
    if (!element) {
      return;
    }
    this.externalElement = {
      externalId: element.id,
      externalName: element.name
    };
  }

  public process() {
    this.processed.emit(this.externalElement);
  }
}
