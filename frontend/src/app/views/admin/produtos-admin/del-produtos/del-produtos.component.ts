import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-del-produtos',
  templateUrl: './del-produtos.component.html',
  styleUrls: ['./del-produtos.component.css']
})
export class DelProdutosComponent implements OnInit {

  item;

  constructor(
    public ref: DynamicDialogRef,
    private produtoService: ProdutosService,
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  cancel() {
    this.ref.close();
  }

  confirm() {
    this.produtoService.delProduct(this.item.id).subscribe(() => {
      this.ref.close();

    }, err => {
      console.log(err);
    })
  }

}
