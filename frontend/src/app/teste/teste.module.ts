import { TesteService } from './teste.service';
import { TesteComponent } from './teste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    TesteComponent
  ],
  providers: [TesteService]
})

export class TesteModule { }
