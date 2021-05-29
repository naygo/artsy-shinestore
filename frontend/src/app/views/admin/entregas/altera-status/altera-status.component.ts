import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-altera-status',
  templateUrl: './altera-status.component.html',
  styleUrls: ['./altera-status.component.css']
})
export class AlteraStatusComponent implements OnInit {

  item;

  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private orderService: OrdersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  cancel() {
    this.ref.close();
  }

  confirm() {
    this.orderService.changeStatus(this.item.item.id, this.item.status).subscribe(() => {
      this.ref.close();
    })
  }
}
