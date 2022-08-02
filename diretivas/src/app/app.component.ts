import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
  <h1>Aula de Diretivas de Atributo</h1>
  </app-diretivas-atributos>
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
title='diretivas estruturais'

ngOnInit(): void{

}
}
