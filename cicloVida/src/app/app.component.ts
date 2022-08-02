import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <br>
  <br>
  <button (click)="destruirComponent()">Destruir Component</button>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  public valor: number = 1;
  public destruir: boolean = true;

  constructor(){

  }

  public adicionar(): number{
    return this.valor +=1;
  }

  public destruirComponent(){
    this.destruir = false;
  }

  ngOnInit(): void{} //chamado uma única vez quando o componente é inicializado (logo após o primeiro ngOnChanges).

  ngDoCheck(): void { //chamado a cada ciclo de detecção de alterações (processo que percorre o componente atrás de mudanças). Usado quando o angular não detecta as alterações por meio do OnChanges
    console.log('ngDoCheck - Houve alteração')
  }

  ngAfterContentInit(): void {} //chamado depois que o conteúdo externo é inserido no componente

  ngAfterContentChecked(): void { //invocado após a verificação do conteúdo externo.
    console.log('ngAfterContentChecked - Houve alteração neste content')
  }

  ngAfterViewInit(): void { //chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado.
    console.log('ngAfterViewInit - Houve alteração após essa view')
  }

  ngAfterViewChecked(): void {} //chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.


}
