import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdificioComponent } from './add-edificio.component';

describe('AddEdificioComponent', () => {
  let component: AddEdificioComponent;
  let fixture: ComponentFixture<AddEdificioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdificioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
