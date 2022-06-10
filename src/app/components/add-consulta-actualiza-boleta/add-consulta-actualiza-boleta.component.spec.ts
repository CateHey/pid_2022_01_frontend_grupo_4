import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultaActualizaBoletaComponent } from './add-consulta-actualiza-boleta.component';

describe('AddConsultaActualizaBoletaComponent', () => {
  let component: AddConsultaActualizaBoletaComponent;
  let fixture: ComponentFixture<AddConsultaActualizaBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultaActualizaBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultaActualizaBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
