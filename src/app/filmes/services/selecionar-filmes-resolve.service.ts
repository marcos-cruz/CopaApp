import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ICommandResponse } from '../interfaces';
import { FilmeApiService } from './filme-api.service';

@Injectable({
  providedIn: 'root'
})
export class SelecionarFilmesResolveService implements Resolve<ICommandResponse> {

  constructor(private filmeApiService: FilmeApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.filmeApiService.obterFilmes();
  }

}
