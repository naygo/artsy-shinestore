import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { ClientesComponent } from './admin/clientes/clientes.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { EntregasComponent } from './admin/entregas/entregas.component';
import { AddCategoriaComponent } from './admin/categorias/add-categoria/add-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoriaComponent } from './admin/categorias/edit-categoria/edit-categoria.component';
import { DelCategoriaComponent } from './admin/categorias/del-categoria/del-categoria.component';
import { DelClienteComponent } from './admin/clientes/del-cliente/del-cliente.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProdutosAdminComponent } from './admin/produtos-admin/produtos-admin.component';
import { CategoryService } from '../shared/services/category.service';
import { ProdutosService } from '../shared/services/produtos.service';
import { UserService } from '../shared/services/user.service';
import { AddProdutosComponent } from './admin/produtos-admin/add-produtos/add-produtos.component';
import { DropdownModule } from 'primeng/dropdown';
import { DelProdutosComponent } from './admin/produtos-admin/del-produtos/del-produtos.component';
import { EditProdutosComponent } from './admin/produtos-admin/edit-produtos/edit-produtos.component';
import { InputTextModule } from 'primeng/inputtext';
import { InfoProdutoComponent } from './cliente/products/info-produto/info-produto.component';
import { EncomendarComponent } from './cliente/products/encomendar/encomendar.component';
import { AlteraStatusComponent } from './admin/entregas/altera-status/altera-status.component';
import { ClienteEncomendasComponent } from './cliente/cliente-encomendas/cliente-encomendas.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ClientesComponent,
    CategoriasComponent,
    EntregasComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    DelCategoriaComponent,
    DelClienteComponent,
    ProdutosAdminComponent,
    AddProdutosComponent,
    DelProdutosComponent,
    EditProdutosComponent,
    InfoProdutoComponent,
    EncomendarComponent,
    AlteraStatusComponent,
    ClienteEncomendasComponent,
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
    MatSnackBarModule,
    DropdownModule,
    InputTextModule,
  ],
  providers: [
    CategoryService,
    ProdutosService,
    UserService,
    DialogService,
    MessageService
  ]

})
export class ViewsModule { }
