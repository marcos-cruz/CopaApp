import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICommandResponse, IFilme } from '../../interfaces';
import { FilmeApiService, FilmeDataService } from '../../services';

@Component({
  selector: 'app-listar-campeao',
  templateUrl: './listar-campeao.component.html',
  styleUrls: ['./listar-campeao.component.css']
})
export class ListarCampeaoComponent implements OnInit {

  tituloFase: string = 'Resultado Final';
  infoFase: string = 'Veja o resultado final do Campeonato de filmes de forma simples e rápida';

  filmesCampeoes : IFilme[] = [];

  constructor(private filmeApiService: FilmeApiService,
              private filmeDataService: FilmeDataService,
              private activatedRoute: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.obterFilmesCampeoes();
  }

  private obterFilmesCampeoes() {
    const commandResponse: ICommandResponse = this.activatedRoute.snapshot.data['listaDeCampeoes']

    if (commandResponse && commandResponse.data) {
      this.filmesCampeoes = <IFilme[]>commandResponse.data;
    }
  }

}
