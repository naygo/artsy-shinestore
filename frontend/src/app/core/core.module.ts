import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { ViewsModule } from './../views/views.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { FooterModule } from '../components/footer/footer.module';
import { RequestTokenInterceptor } from './auth/interceptors/request-token.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,

    ViewsModule,
    PagesModule,
    FooterModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
