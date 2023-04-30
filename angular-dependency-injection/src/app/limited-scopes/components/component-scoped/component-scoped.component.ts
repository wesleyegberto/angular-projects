import { Component } from '@angular/core';

import { LimitedScopedService } from 'src/app/services/limited-scope.service';

@Component({
  selector: 'app-component-scoped',
  templateUrl: './component-scoped.component.html',
  providers: [LimitedScopedService]
})
export class ComponentScopedComponent {
  constructor(public simpleService: LimitedScopedService) {
    simpleService.value = 'Component scoped';
  }
}
