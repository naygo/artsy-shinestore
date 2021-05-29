import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
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
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  encomendar(item) {
    
    const ref = this.dialogService.open(EncomendarComponent, {
      data: item,
      width: '20%'
    })
  }
  
}
