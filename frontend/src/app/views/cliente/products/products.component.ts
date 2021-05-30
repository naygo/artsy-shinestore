import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { InfoProdutoComponent } from './info-produto/info-produto.component';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  placeholder = 'Categoria';
  products: any[] = [];

  categorias = [
    { label: 'Acessórios', value: 1 },
    { label: 'Bolsa', value: 2 },
    { label: 'Brinco', value: 3 },
    { label: 'Chaveiro', value: 4 },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    public dialogService: DialogService,
    private ordersService: OrdersService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.loadProdutos();
  }

  private criaFormulario() {
    this.form = this.formBuilder.group({
      categorias: []
    })
  }

  loadProdutos() {
    this.produtosService.getAllProducts().subscribe(response => {
      response.forEach(element => {
        this.products.push({
          id: element.id,
          name: element.name,
          description: element.description,
          value: element.value,
          img_link: element.img_link,
          category: element.category.category
        })
      });
    })
  }

  infoProduto(produto) {

    const ref = this.dialogService.open(InfoProdutoComponent, {
      data: produto,
      width: '50%'
    });
  }

  sendForm() {

  }

}
