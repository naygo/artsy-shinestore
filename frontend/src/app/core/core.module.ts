import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ViewsModule } from './../views/views.module';
import { HomeComponent } from '../pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,

    ViewsModule,
    PagesModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
