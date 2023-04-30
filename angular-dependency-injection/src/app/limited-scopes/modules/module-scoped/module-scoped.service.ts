import { Injectable } from '@angular/core';

import { SingletonService } from 'src/app/services/singleton.service';

// Angular will provide a new instance for each injector created (feature module, component or diretive that directly imports the module)
@Injectable()
export class ModuleScopedService {
  constructor(private rootService: SingletonService) {
  }

  public toString() {
    return `
      Service from another module without providedIn need to be declared in NgModule, but it can inject a service with providedIn root.
      RootService: ${this.rootService}
    `;
  }
}
