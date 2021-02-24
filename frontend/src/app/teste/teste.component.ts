import { TesteService } from './teste.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  items;

  constructor(
    private testeService: TesteService
  ) { }

  ngOnInit(): void {
    this.testeService.getUsers().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

}
