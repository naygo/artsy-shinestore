import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


import { AdminComponent } from './admin/admin.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { EntregasComponent } from './admin/entregas/entregas.component';
import { AddCategoriaComponent } from './admin/categorias/add-categoria/add-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoriaComponent } from './admin/categorias/edit-categoria/edit-categoria.component';
import { DelCategoriaComponent } from './admin/categorias/del-categoria/del-categoria.component';
import { DelClienteComponent } from './admin/clientes/del-cliente/del-cliente.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    ClientesComponent,
    CategoriasComponent,
    EntregasComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    DelCategoriaComponent,
    DelClienteComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    AdminComponent
  ]
})
export class ViewsModule { }
