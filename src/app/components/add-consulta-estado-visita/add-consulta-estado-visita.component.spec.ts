import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultaEstadoVisitaComponent } from './add-consulta-estado-visita.component';

describe('AddConsultaEstadoVisitaComponent', () => {
  let component: AddConsultaEstadoVisitaComponent;
  let fixture: ComponentFixture<AddConsultaEstadoVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultaEstadoVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultaEstadoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
