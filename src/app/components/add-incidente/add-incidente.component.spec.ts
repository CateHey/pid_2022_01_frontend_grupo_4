import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidenteComponent } from './add-incidente.component';

describe('AddBoletaComponent', () => {
  let component: AddIncidenteComponent;
  let fixture: ComponentFixture<AddIncidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIncidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});