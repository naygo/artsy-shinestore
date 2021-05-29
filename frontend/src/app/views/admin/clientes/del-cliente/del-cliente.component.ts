import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-del-cliente',
  templateUrl: './del-cliente.component.html',
  styleUrls: ['./del-cliente.component.css']
})
export class DelClienteComponent implements OnInit {

  item;

  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  cancel() {
    this.ref.close();
  }

  confirm() {
    this.ref.close(this.item.id);
  }

}
