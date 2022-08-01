import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Camilla";

  public position: {x:number, y:number} = {x: 0, y: 0}

  checkedDisabled: boolean = true;

  imgSrc: string = "https://w7.pngwing.com/pngs/1014/365/png-transparent-angular-js-full-logo-tech-companies-thumbnail.png";

  altImg: string = "Angular Logo";

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: string){
    alert(valor);
  }

  public alertaInfo2(valor2: MouseEvent){
    console.log(valor2)
  }

  public mouseMove(valor3: MouseEvent){
    //console.log(valor3);
    this.position.x = valor3.offsetX;
    this.position.y = valor3.offsetY;

  }

}
