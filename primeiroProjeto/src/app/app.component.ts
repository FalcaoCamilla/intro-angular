import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Oie"></app-title>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void{
    //o ngOnInit inicia o componente, independente de tudo
  }
}
