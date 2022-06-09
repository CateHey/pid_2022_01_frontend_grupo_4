import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoletaComponent } from './add-boleta.component';

describe('AddBoletaComponent', () => {
  let component: AddBoletaComponent;
  let fixture: ComponentFixture<AddBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
