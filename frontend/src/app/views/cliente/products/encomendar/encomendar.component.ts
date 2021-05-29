import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-encomendar',
  templateUrl: './encomendar.component.html',
  styleUrls: ['./encomendar.component.css']
})
export class EncomendarComponent implements OnInit {

  form: FormGroup;
  item;

  constructor(
    private ordersService: OrdersService,
    private formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private userService: UserService,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;

    this.form = this.formBuilder.group({
      quantidade: ['', Validators.required]
    })
  }

  cancel() {
    this.ref.close();
  }

  salvar() {
    const quantity = this.form.get('quantidade').value;
    const date = new Date();
    const user_id = this.userService.idLogged;
    const product_id = this.item.id;

    const dados = {
      quantity,
      date,
      user_id,
      product_id
    }

    // this.ordersService.addOrder(quantity, date, user_id, product_id).subscribe(() => {
    //   this.ref.close();
    // })

    this.ref.close(dados);    
  }

}
