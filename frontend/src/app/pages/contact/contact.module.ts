import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
