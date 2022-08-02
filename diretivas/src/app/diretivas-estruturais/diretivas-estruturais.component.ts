import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [ //list é do tipo array e recebe objetos. O array de objetos recebe nome, que é uma string e uma idade, que é um número
    {nome: "Cami Falcão", idade: 19},
    {nome: "Neto Falcão", idade: 21},
    {nome: "Hugo Falcão", idade: 13}
  ]

  public nome: string = "Camilla";

  constructor(){
  
  }
  
  ngOnInit(): void{
  
    setInterval(() => {
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000) //a cada 2s a condição recebe um valor falso ou verdadeiro
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  } //a função definida como onClick retorna falso quando, ao ser chamada, seu valor for verdadeiro
  
  public onClickAddList(){
    this.list.push({nome: "Dani", idade: 47})
  }

  public onClickEventList(pos: number){ //pos recebe um número, que é passado como parametro do evento no html
    this.list.splice(pos, 1) //splice remove 1 item a partir de pos
  }
}
