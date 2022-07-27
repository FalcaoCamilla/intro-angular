import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saudacao',
  templateUrl: './saudacao.component.html',
  styleUrls: ['./saudacao.component.css']
})
export class SaudacaoComponent implements OnInit {
  mensagem: string;

  constructor() {
    this.mensagem = '';
   }

  ngOnInit(): void {
  }

  saudarUser(n: string){
    this.mensagem= `Seja bem-vindo, ${n}`;
  }

}
