import { Component } from '@angular/core';

import { ModuleScopedService } from './limited-scopes/modules/module-scoped/module-scoped.service';
import { LimitedScopedService } from './services/limited-scope.service';
import { SingletonService } from './services/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public rootService: SingletonService,
    public simpleService: LimitedScopedService,
    public moduleProvidedInRootService: ModuleScopedService
  ) {
    simpleService.value = 'root scoped';
  }
}
