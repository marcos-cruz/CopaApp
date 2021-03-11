import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ICommandResponse, IFilme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmeApiService {

  private readonly urlFilmesV1: string;
  private readonly commandResponse: Observable<ICommandResponse>;

  constructor(private http: HttpClient) {
    this.urlFilmesV1 = `${environment.urlFilmesApiV1}`;
   }

   public obterFilmes() : Observable<ICommandResponse> {
    return this.http.get<ICommandResponse>('/api/v1/filmes');
  }

  public gerarCampeonato(request: IFilme[]): Observable<ICommandResponse> {
    return this.http.post<ICommandResponse>('/api/v1/filmes', request);
  }
}
