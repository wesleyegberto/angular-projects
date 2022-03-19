import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSwitchButtonComponent } from './components/simple-switch-button/simple-switch-button.component';
import { ContactFormModule } from './components/contact-form/contact-form.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSwitchButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactFormModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
