import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-diretivas-atributos>
  <h1>Aula de Diretivas de Atributo</h1>
  </app-diretivas-atributos>

  <app-new-component></app-new-component>
  <app-input [contador]="addValue"></app-input>
  <button (click)="add()">Add</button>
  <br>

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>`
}) //o output enviarDados é capturado no component com o método setDados
//o event é o dado que deve ser capturado
export class AppComponent implements OnInit {
title='diretivas estruturais'

public addValue: number = 0;

public getDados: {nome:string, idade:number} | undefined; //dados populados atráves da função setDados. A partir disso, pode ser mostrado na tela usando o ng-template

public add(){
  this.addValue += 1;
}

ngOnInit(): void{

}

public setDados(event: {nome:string, idade:number}){ //recebe um evento de par igual ao do getDados
  this.getDados = event;
}

}
