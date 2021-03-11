import { TestBed } from '@angular/core/testing';

import { SelecionarFilmesResolveService } from './selecionar-filmes-resolve.service';

describe('SelecionarFilmesResolveService', () => {
  let service: SelecionarFilmesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelecionarFilmesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
