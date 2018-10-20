import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { FieldErrorDisplayComponent } from './helpers/field-error-display/field-error-display.component';
import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent,
    SimpleFormComponent,
    ValidateFieldsSubmitFormComponent,
    SubmitFlagFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
