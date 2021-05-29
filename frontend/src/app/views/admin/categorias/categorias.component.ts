import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/shared/services/category.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { DelCategoriaComponent } from './del-categoria/del-categoria.component';
import { Category } from 'src/app/shared/models/category.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categories: Category[] = [];

  dataSource;
  displayedColumns: string[] = ['category', 'actions'];

  constructor(
    private categoriesService: CategoryService,
    public dialog: MatDialog,
    public dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.categoriesService.onUpdateCategory()
      .subscribe(
        () => {
          this.init();
        }
      );

    this.init();
  }

  private init() {
    this.loadCategories();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadCategories() {
    this.categoriesService.getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.dataSource = new MatTableDataSource(categories);
      })
  }

  addCategoria() {
    const ref = this.dialogService.open(AddCategoriaComponent, {
      header: 'Adicionar categoria',
      width: '50%'
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.categoriesService.addCategory(resp).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Categoria criada com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    })
  }

  editCategoria(element) {
    const ref = this.dialogService.open(EditCategoriaComponent, {
      data: element,
      header: 'Editar categoria',
      width: '50%',
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.categoriesService.editCategory(resp.id, resp.category).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Categoria editada com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    })
  }

  delCategoria(element) {
    const ref = this.dialogService.open(DelCategoriaComponent, {
      data: element,
      header: 'Deseja deletar essa categoria',
      width: '50%'
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.categoriesService.delCategory(resp).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Categoria deletada com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    })
  }

  onReject() {
    this.messageService.clear('c');
  }

}
