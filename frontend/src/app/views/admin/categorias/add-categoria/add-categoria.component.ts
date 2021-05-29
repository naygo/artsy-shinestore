import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css'],
  providers: [MessageService]
})
export class AddCategoriaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: ['', Validators.required]
    })
  }

  salvar() {
    const category = this.form.get('category').value;
    this.ref.close(category)
  }
}
