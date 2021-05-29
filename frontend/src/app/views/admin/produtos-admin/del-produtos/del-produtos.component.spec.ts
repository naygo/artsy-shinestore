import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelProdutosComponent } from './del-produtos.component';

describe('DelProdutosComponent', () => {
  let component: DelProdutosComponent;
  let fixture: ComponentFixture<DelProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
