import { NgModule } from '@angular/core';

import { ModuleScopedService } from './module-scoped.service';

@NgModule({
  exports: [],
  providers: [ ModuleScopedService ],
})
export class ModuleScopedModule { }

