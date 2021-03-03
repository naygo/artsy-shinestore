import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
