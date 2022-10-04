import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public cadastroForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName)
    }
  }

}
