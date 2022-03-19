import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent } from './contact-form.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ContactFormComponent],
  providers: [ContactService],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
