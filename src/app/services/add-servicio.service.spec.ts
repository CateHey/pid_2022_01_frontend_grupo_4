import { TestBed } from '@angular/core/testing';

import { AddServicioService } from './add-servicio.service';

describe('AddServicioService', () => {
  let service: AddServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
