import { Component} from '@angular/core';
import { OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Comidas } from '../model/comidas';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  ngOnInit(): void {
  }

  public listComidas: Array<Comidas> = [
    { nome: "X-Salada", preco: "10,00"},
    { nome: "X-Bacon", preco: "15,00"},
    { nome: "X-Tudo", preco: "20,00"},
  ]

  constructor() { }

  public submitForm(form: NgForm){
    console.log(form.value)
  }
}
