import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { AddProdutosComponent } from './add-produtos/add-produtos.component';
import { DelProdutosComponent } from './del-produtos/del-produtos.component';
import { EditProdutosComponent } from './edit-produtos/edit-produtos.component';

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
    public dialogService: DialogService,
    private messageService: MessageService
  ) { }

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
        this.products = products;
        this.dataSource = new MatTableDataSource(products);
      })
  }

  addProduto() {
    const ref = this.dialogService.open(AddProdutosComponent, {
      header: 'Adicionar produto',
      width: '70%'
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.produtosService.addProduct(resp.name, resp.value, resp.description, resp.img_link, resp.category).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Produto criado com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    })
  }

  editProduto(element) {
    const ref = this.dialogService.open(EditProdutosComponent, {
      data: element,
      header: 'Editar produto',
      width: '70%'
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.produtosService.editProduct(element.id, resp.name, resp.value, resp.description, resp.img_link, resp.category).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Produto editado com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    });
  }

  delCategoria(element) {
    const ref = this.dialogService.open(DelProdutosComponent, {
      data: element,
      header: 'Deletar produto',
      width: '70%'
    });

    ref.onClose.subscribe(resp => {
      if (resp) {
        this.produtosService.delProduct(resp).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Produto deletado com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
      }
    });
  }
}
