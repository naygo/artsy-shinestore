import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/shared/services/category.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css'],
  providers: [  MessageService ]
})
export class AddCategoriaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ){ }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: ['', Validators.required]
    })
  }

  salvar() {
    const category = this.form.get('category').value;

    this.categoryService.addCategory(category).subscribe(() => {
      this.ref.close();

    });
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }
}
