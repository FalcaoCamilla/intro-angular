import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private activedRoute:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      (res: any) => {console.log(res.id, res.username, res)} //http://localhost:4200/sobre/2/outro%20nome
    )

    this.activedRoute.queryParams.subscribe(
      (res: any) => {console.log(res)} //http://localhost:4200/sobre/2/outro%20nome?nome=camilla
    )

    //setInterval( () => {
      //this.router.navigate(['404']); //depois de 5 segundos, a página será redirecionada para o 404
      //this.router.navigateByUrl('404'); //pode demorar mais, fazendo um reload de página
   // }, 5000)

  }

}
