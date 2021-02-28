import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

    form: FormGroup;
    placeholder = 'Categoria';

    categorias = [
      { label: 'Acessórios', value: 1 },
      { label: 'Bolsa', value: 2 },
      { label: 'Brinco', value: 3 },
      { label: 'Chaveiro', value: 4 },
    ]

    constructor(
      private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.criaFormulario();
  }

  private criaFormulario() {
    this.form = this.formBuilder.group({
      categorias: []
    })
  }

  sendForm() {

  }


}
