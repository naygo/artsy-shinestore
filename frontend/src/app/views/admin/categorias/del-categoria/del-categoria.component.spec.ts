import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCategoriaComponent } from './del-categoria.component';

describe('DelCategoriaComponent', () => {
  let component: DelCategoriaComponent;
  let fixture: ComponentFixture<DelCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
