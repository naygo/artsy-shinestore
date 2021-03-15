import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './../components/footer/footer.component';
import { ViewsModule } from './../views/views.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
    FooterComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
