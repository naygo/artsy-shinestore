import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import * as _ from 'lodash';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

interface Category {
  name: string,
  id: string
}

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html',
  styleUrls: ['./add-produtos.component.css']
})
export class AddProdutosComponent implements OnInit {

  form: FormGroup;
  categories: Category[] = [];

  imageError: string;
  image64: string;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private categoryService: CategoryService,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      value: ['', Validators.required],
    })

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

    const res = await fetch(this.image64)
    const blobVal = await res.blob()
    console.log(blobVal)

    const dados = [
      {
        name: this.form.get('name').value,
        value: this.form.get('value').value,
        description: this.form.get('description').value,
        img_link: blobVal,
        category_id: this.form.get('category').value.id
      }
    ]

    this.produtosService.addProduct(dados).subscribe(() => {
      console.log('subscribe');      
      this.ref.close();
    })
  }
}
