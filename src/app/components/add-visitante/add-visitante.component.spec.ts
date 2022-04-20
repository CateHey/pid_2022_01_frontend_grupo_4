import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitanteComponent } from './add-visitante.component';

describe('AddVisitanteComponent', () => {
  let component: AddVisitanteComponent;
  let fixture: ComponentFixture<AddVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
