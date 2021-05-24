import { AlertComponent } from 'src/app/components/alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [ AlertComponent ],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [ AlertComponent ]
})
export class AlertModule { }
