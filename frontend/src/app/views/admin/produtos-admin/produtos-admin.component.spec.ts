import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAdminComponent } from './produtos-admin.component';

describe('ProdutosAdminComponent', () => {
  let component: ProdutosAdminComponent;
  let fixture: ComponentFixture<ProdutosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
