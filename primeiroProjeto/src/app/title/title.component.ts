import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Bem-vindo"; //o input deve receber um dado externo, nesse caso title recebe um valor no component, que será priorizado

  constructor() {}

  ngOnInit(): void {} //chamado uma única vez quando o componente é inicializado (logo após o primeiro ngOnChanges).

  ngOnChanges(): void {
    console.log("Alterado com sucesso!") //chamado uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada. Ou seja, mudanças no Input() decorator e no property binding (dados externos).
  }

  ngOnDestroy(): void {
    console.log("Componente excluído") //invocado quando algum componente é destruído
  }

}
