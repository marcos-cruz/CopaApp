import { TestBed } from '@angular/core/testing';

import { ListarCampeaoResolveService } from './listar-campeao-resolve.service';

describe('ListarCampeaoResolveService', () => {
  let service: ListarCampeaoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCampeaoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
