import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import * as _ from 'lodash';

interface Category {
  name: string,
  id: string
}

@Component({
  selector: 'app-edit-produtos',
  templateUrl: './edit-produtos.component.html',
  styleUrls: ['./edit-produtos.component.css']
})
export class EditProdutosComponent implements OnInit {

  item;
  form: FormGroup;
  categories: Category[] = [];

  imageError: string;
  image64: string;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private categoryService: CategoryService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.item = this.config.data;

    this.form = this.formBuilder.group({
      name: [this.item.name, Validators.required],
      description: [this.item.description, Validators.required],
      category: ['', Validators.required],
      image: [this.item.image, Validators.required],
      value: [this.item.value, Validators.required],
    });

    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories()
      .subscribe(response => {

        response.forEach(element => {
          this.categories.push({
            name: element.category,
            id: element.id
          })
        });
      })
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;

    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            this.image64 = e.target.result;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  async salvar() {
    const name = this.form.get('name').value;
    const value = this.form.get('value').value;
    const description = this.form.get('description').value;
    const img_link = this.image64;
    const category = this.form.get('category').value.id;

    if (!category) {
      this.produtosService
        .editProduct(this.item.id, name, value, description, img_link, this.item.category.id)
        .subscribe(() => {
          this.ref.close();
        })
    } else {
      this.produtosService
        .editProduct(this.item.id, name, value, description, img_link, category)
        .subscribe(() => {
          this.ref.close();
        })
    }
  }

}
