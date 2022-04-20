import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartamentoComponent } from './add-departamento.component';

describe('AddDepartamentoComponent', () => {
  let component: AddDepartamentoComponent;
  let fixture: ComponentFixture<AddDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
