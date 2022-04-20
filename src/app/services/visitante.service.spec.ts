import { TestBed } from '@angular/core/testing';

import { VisitanteService } from './visitante.service';

describe('VisitanteService', () => {
  let service: VisitanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
