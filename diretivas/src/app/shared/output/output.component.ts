import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter(); //emite o valor do getDados

  public list: Array<{nome: string, idade: number}> = [ //any
    {nome: "Camilla Falcão", idade: 19},
    {nome: "Neto Falcão", idade: 21},
    {nome: "Hugo Falcão", idade: 13},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]); //emite o valor do índice i da lista
  }
}
