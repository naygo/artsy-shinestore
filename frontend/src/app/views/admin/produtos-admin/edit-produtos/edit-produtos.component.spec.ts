import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutosComponent } from './edit-produtos.component';

describe('EditProdutosComponent', () => {
  let component: EditProdutosComponent;
  let fixture: ComponentFixture<EditProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
