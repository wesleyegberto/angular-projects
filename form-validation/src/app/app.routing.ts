import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';

const routes: Routes = [
  { path: '', component: SimpleFormComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'validate-fields', component: ValidateFieldsSubmitFormComponent },
  { path: 'validate-fields-with-flag', component: SubmitFlagFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
