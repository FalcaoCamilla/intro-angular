import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title:string = "Bem-vindo"; //o input deve receber um dado externo, nesse caso title recebe um valor no component, que será priorizado

  constructor() {}

  ngOnInit(): void {} //o ngOnInit inicia o componente, independente de tudo

  ngOnChanges(): void {
    console.log("Alterado com sucesso!") //invocado quando há um dado externo
  }

}
