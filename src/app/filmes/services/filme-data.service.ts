import { Injectable } from '@angular/core';

import { IFilme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmeDataService {
  
  private filmesSelecionados: IFilme[] = [];

  setFilmesSelecionados(filmes: IFilme[]) {
    this.filmesSelecionados = filmes;
  }

  getFilmesSelecionados(): IFilme[] {
    return this.filmesSelecionados;
  }  
  
  constructor() {   }
}
