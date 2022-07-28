import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title:string = "Bem-vindo";

  constructor() {}

  ngOnInit(): void {} //o ngOnInit inicia o componente, independente de tudo

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Alterado com sucesso!") //invocado quando há um dado externo
  }

}
