import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdutosComponent } from './add-produtos.component';

describe('AddProdutosComponent', () => {
  let component: AddProdutosComponent;
  let fixture: ComponentFixture<AddProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
