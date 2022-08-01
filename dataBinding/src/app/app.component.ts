import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void{

  }
}
