import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { AddProdutosComponent } from './add-produtos/add-produtos.component';

@Component({
  selector: 'app-produtos-admin',
  templateUrl: './produtos-admin.component.html',
  styleUrls: ['./produtos-admin.component.css']
})
export class ProdutosAdminComponent implements OnInit {

  products: any[] = [];

  dataSource;
  displayedColumns: string[] = ['img_link', 'name', 'description', 'category', 'value', 'actions'];

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {

    this.produtosService.onUpdateCategory()
      .subscribe(
        () => {
          this.init();
        }
      );

    this.init();
  }

  private init() {
    this.loadProdutos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadProdutos() {
    this.produtosService.getAllProducts()
    .subscribe((products) => {
      console.log(products);
      
      this.products = products;
      this.dataSource = new MatTableDataSource(products);
    })
  }

  addProduto() {
    const ref = this.dialogService.open(AddProdutosComponent, {
      header: 'Adicionar produto',
      width: '70%'
  })
  }

  editCategoria(element) {
    
  }

  delCategoria(element) {
    
  }
}
