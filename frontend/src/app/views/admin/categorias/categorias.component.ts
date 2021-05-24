import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/shared/services/category.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { DelCategoriaComponent } from './del-categoria/del-categoria.component';
import { Category } from 'src/app/shared/models/category.model';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers:[ DialogService ]
})
export class CategoriasComponent implements OnInit {

  categories: Category[] = [];

  dataSource;
  displayedColumns: string[] = ['category', 'actions'];

  constructor(
    private categoriesService: CategoryService,
    public dialog: MatDialog,
    public dialogService: DialogService
  ) {}

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
        width: '70%'
    });
  }

  editCategoria(element) {
    const ref = this.dialogService.open(EditCategoriaComponent, {
      data: element,
      header: 'Editar categoria',
      width: '70%',
    });
  }

  delCategoria(element) {
    const ref = this.dialogService.open(DelCategoriaComponent, {
      data: element,
      header: 'Deseja deletar essa categoria',
      width: '50%'
    });
  }

}
