import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ICommandResponse } from '../interfaces/command-response.interface';
import { FilmeApiService } from './filme-api.service';
import { FilmeDataService } from './filme-data.service';


@Injectable({
  providedIn: 'root'
})
export class ListarCampeaoResolveService implements Resolve<ICommandResponse> {

  constructor(private filmeApiService: FilmeApiService,
              private filmeDataService: FilmeDataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.filmeApiService.gerarCampeonato(this.filmeDataService.getFilmesSelecionados());
  }

}
