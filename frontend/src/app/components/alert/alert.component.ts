import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message;

  constructor(
    private matSnackBarConfig: MatSnackBarConfig,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    let config = new MatSnackBarConfig();
    console.log(config.data.message)
  }

}
