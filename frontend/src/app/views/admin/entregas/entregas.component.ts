import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'primeng/dynamicdialog';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { AlteraStatusComponent } from './altera-status/altera-status.component';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  orders: any[] = [];
  dataSource;
  displayedColumns: string[] = ['product', 'quantity', 'user', 'data', 'actions'];
  resp; 

  acoes = [
    { labe: 'editar', value: 'pi pi-editar' },
    { labe: 'excluir', value: 'pi pi-editar' }
  ]

  constructor(
    private ordersService: OrdersService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadOrders();    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadOrders() {
    this.orders = [];

    this.ordersService.getAllOrders().subscribe(response => {
      this.orders = response;
      this.dataSource = new MatTableDataSource(response);
    })
  }

  alteraStatus(item, status) {

    const dados = {
      item,
      status
    }

    const ref = this.dialogService.open(AlteraStatusComponent, {
      data: dados,
      header: 'Deseja alterar o status?',
      width: '50%'
    });

    ref.onClose.subscribe(resp => {
      this.loadOrders();
    })
  }
}
