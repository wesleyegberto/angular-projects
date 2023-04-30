import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentScopedComponent } from './limited-scopes/components/component-scoped/component-scoped.component';
import { ModuleScopedModule } from './limited-scopes/modules/module-scoped/module-scoped.module';
import { LimitedScopedService } from './services/limited-scope.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentScopedComponent
  ],
  imports: [
    BrowserModule,
    ModuleScopedModule
  ],
  providers: [
    // RootService doesn't need to be declared
    LimitedScopedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
