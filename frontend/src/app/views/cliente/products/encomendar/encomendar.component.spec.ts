import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendarComponent } from './encomendar.component';

describe('EncomendarComponent', () => {
  let component: EncomendarComponent;
  let fixture: ComponentFixture<EncomendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
