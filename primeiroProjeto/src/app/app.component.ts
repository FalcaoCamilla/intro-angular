import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  public valor: number = 1;

  constructor(){

  }

  public adicionar(): number{
    return this.valor +=1;
  }

  ngOnInit(): void{

  }

  ngDoCheck(): void {
    console.log('ngDoCheck - Houve alteração')
  }

  ngAfterContentInit(): void {

  }


  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - Houve alteração neste content')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - Houve alteração após essa view')
  }

  ngAfterViewChecked(): void {

  }

}
