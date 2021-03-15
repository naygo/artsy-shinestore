import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserService } from '../shared/services/user.service';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    InputTextModule,
    InputTextareaModule,
    DropdownModule
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent
  ],
  providers: [
    UserService
  ]
})
export class PagesModule { }
