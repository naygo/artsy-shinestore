import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
