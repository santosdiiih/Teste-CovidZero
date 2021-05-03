import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.components';
import { DadosListComponent } from './views/dados-list.component';

import { GraficoComponent } from './views/grafico.component';
import { HomeComponent } from './views/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosListComponent,
    GraficoComponent,
    NavBarComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    // definindo as rotas da aplicação
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch:'full'
      },
      {
        path: 'dados', component: DadosListComponent 
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'grafico', component: GraficoComponent
      },
      {
        path: '**', component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
