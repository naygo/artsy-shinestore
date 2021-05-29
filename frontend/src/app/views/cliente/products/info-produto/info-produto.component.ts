import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { EncomendarComponent } from '../encomendar/encomendar.component';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css']
})
export class InfoProdutoComponent implements OnInit {

  item;

  constructor(
    private config: DynamicDialogConfig,
    public dialogService: DialogService,    
    private ordersService: OrdersService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  encomendar(item) {
    
    const ref = this.dialogService.open(EncomendarComponent, {
      data: item,
      width: '20%'
    });

    ref.onClose.subscribe(resp => {
      this.ordersService.addOrder(resp.quantity, resp.date, resp.user_id, resp.product_id)
        .subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Encomenda feita com sucesso' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Não foi possível concluir a operação' });
        });
    })
  }
  
}
