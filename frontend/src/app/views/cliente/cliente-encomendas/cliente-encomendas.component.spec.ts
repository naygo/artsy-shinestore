import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEncomendasComponent } from './cliente-encomendas.component';

describe('ClienteEncomendasComponent', () => {
  let component: ClienteEncomendasComponent;
  let fixture: ComponentFixture<ClienteEncomendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEncomendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
