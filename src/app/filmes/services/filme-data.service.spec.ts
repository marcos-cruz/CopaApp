import { TestBed } from '@angular/core/testing';

import { FilmeDataService } from './filme-data.service';

describe('FilmeDataService', () => {
  let service: FilmeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
