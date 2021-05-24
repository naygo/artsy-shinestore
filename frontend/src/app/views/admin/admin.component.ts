import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const name = this.userService.nameLogged;
    this.name = name;
  }

}
