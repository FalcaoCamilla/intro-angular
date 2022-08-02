import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public height: string = "20px";
  public bgColor: string = "pink";

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if(this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.height == "20px"){
        this.height = "50px";
        this.bgColor = "rgb(210, 217, 255)";
      } else {
        this.height = "20px";
        this.bgColor = "rgb(250, 231, 194)";
      }
    }, 2000)
  }

}
