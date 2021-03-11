import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ICommandResponse, IFilme } from '../../interfaces';
import { FilmeDataService } from '../../services';


@Component({
  selector: 'app-selecionar-filmes',
  templateUrl: './selecionar-filmes.component.html',
  styleUrls: ['./selecionar-filmes.component.css']
})
export class SelecionarFilmesComponent implements OnInit {

  private readonly selecaoMaxima: number = 8;

  tituloFase: string = 'Fase da Seleção';
  infoFase: string = 'Selecione 8 filmes que você deseja que entrem na competição e depois pressione o\n botão Gerar Meu Campeonato para prosseguir.';
  selecionados: string = 'Selecionados\n0 de ' + this.selecaoMaxima + ' filmes';
  enviando: boolean = true;

  listaDeFilmesParticipantes : IFilme[] = [];

  formulario: FormGroup;

  get filmesFormArray() : FormArray {
    return this.formulario.controls.filmes as FormArray;
  }
  
  constructor(private filmeDataService: FilmeDataService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.obterFilmesParticipantes();
    this.criarFormulario();
    this.adicionarFilmesCheckbox();
    this.criarEventoOnChangeForm();
  }
  
  private obterFilmesParticipantes() {
    const commandResponse: ICommandResponse = this.activatedRoute.snapshot.data['listaDeFilmes']

    if (commandResponse && commandResponse.data) {
      this.listaDeFilmesParticipantes = <IFilme[]>commandResponse.data;
    }
  }

  private criarFormulario() {
    this.formulario = this.formBuilder.group({
      filmes: new FormArray([])
    });
  }

  private adicionarFilmesCheckbox() {
    this.listaDeFilmesParticipantes.forEach(() => this.filmesFormArray.push(new FormControl(false)));
  } 

  private criarEventoOnChangeForm(): void {
    this.formulario.valueChanges
      .subscribe(() => {
        this.mostrarQuantidadeDeFilmesJaSelecionados();
      });
  }

  private mostrarQuantidadeDeFilmesJaSelecionados() : void
  {
    const selectedOrderIds: any = this.formulario.value.filmes
      .map((checked: any, i: string | number) => checked ? this.listaDeFilmesParticipantes[i].id : null)
      .filter((v: any) => v !== null);

    const totalSelecionado: number = selectedOrderIds.length;

    this.selecionados = 'Selecionados\n' + totalSelecionado + ' de ' + this.selecaoMaxima + ' filmes';

    this.enviando = !(totalSelecionado === this.selecaoMaxima);
  }

  submit() {
    const filmesSelecionados : IFilme[] = this.formulario.value.filmes
      .map((checked: any, i: string | number) => checked ? this.listaDeFilmesParticipantes[i] : null)
      .filter((v: any) => v !== null);

      this.filmeDataService.setFilmesSelecionados(filmesSelecionados);

      this.router.navigate(['campeao']);
    }  

}
