import { Component } from '@angular/core';

import { SimpleService } from './simple.service';

@Component({
  selector: 'app-logic-testing',
  templateUrl: 'logic-testing.component.html',
})
export class LogicTestingComponent {
  public generatedMessage: string;

  constructor(private simpleSvc: SimpleService) {}

  public someLogic() {
    this.generatedMessage = `Your lucky number is: ${this.simpleSvc.getMagicNumber()}`;
  }
}
