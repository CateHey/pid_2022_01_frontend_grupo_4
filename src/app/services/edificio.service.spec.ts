import { TestBed } from '@angular/core/testing';

import { EdificioService } from './edificio.service';

describe('EdificioService', () => {
  let service: EdificioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
