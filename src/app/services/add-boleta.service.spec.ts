import { TestBed } from '@angular/core/testing';

import { AddBoletaService } from './add-boleta.service';

describe('AddBoletaService', () => {
  let service: AddBoletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBoletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
