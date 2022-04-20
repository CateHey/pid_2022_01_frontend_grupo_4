import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropietarioComponent } from './add-propietario.component';

describe('AddPropietarioComponent', () => {
  let component: AddPropietarioComponent;
  let fixture: ComponentFixture<AddPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
