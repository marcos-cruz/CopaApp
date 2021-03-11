import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './filmes/components/header/header.component';
import { SelecionarFilmesComponent } from './filmes/components/selecionar-filmes/selecionar-filmes.component';
import { ListarCampeaoComponent } from './filmes/components/listar-campeao/listar-campeao.component';
import { FilmeApiService, FilmeDataService, ListarCampeaoResolveService, SelecionarFilmesResolveService } from './filmes/services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelecionarFilmesComponent,
    ListarCampeaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FilmeApiService, 
    FilmeDataService, 
    SelecionarFilmesResolveService,
    ListarCampeaoResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



