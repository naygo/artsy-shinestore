import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cliente-encomendas',
  templateUrl: './cliente-encomendas.component.html',
  styleUrls: ['./cliente-encomendas.component.css']
})
export class ClienteEncomendasComponent implements OnInit {

  orders: any[] = [];
  dataSource;
  displayedColumns: string[] = ['product', 'quantity', 'user', 'data', 'status'];
  resp; 

  constructor(
    private ordersService: OrdersService,
    private userService: UserService
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

    this.ordersService.findUserOrders(this.userService.idLogged).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);      
    })
  }
}
