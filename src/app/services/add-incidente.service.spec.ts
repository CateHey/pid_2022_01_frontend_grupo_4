import { TestBed } from '@angular/core/testing';

import { AddIncidenteService } from './add-incidente.service';

describe('AddIncidenteService', () => {
  let service: AddIncidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIncidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});