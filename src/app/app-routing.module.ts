import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelecionarFilmesComponent } from './filmes/components/selecionar-filmes/selecionar-filmes.component';
import { ListarCampeaoComponent } from './filmes/components/listar-campeao/listar-campeao.component';
import { ListarCampeaoResolveService, SelecionarFilmesResolveService } from './filmes/services';


const filmesRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SelecionarFilmesComponent,
    resolve: {
      listaDeFilmes: SelecionarFilmesResolveService
    }
  }, 
  { path: 'campeao', component: ListarCampeaoComponent, 
    resolve: {
      listaDeCampeoes: ListarCampeaoResolveService
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(filmesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
