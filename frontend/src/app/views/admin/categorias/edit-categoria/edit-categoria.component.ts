import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  form: FormGroup;
  item;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;

    this.form = this.formBuilder.group({
      category: [this.item.category, Validators.required]
    })
  }

  salvar() {
    const category = this.form.get('category').value;
    
    const dados = {
      id: this.item.id,
      category
    }

    this.ref.close(dados);
  }

}
