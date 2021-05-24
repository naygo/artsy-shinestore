import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';

import { PerfilComponent } from './perfil.component';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    MenuModule,
    MatTableModule
  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule { }
