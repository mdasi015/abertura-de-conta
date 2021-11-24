import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlanosModel } from './planos-model';
import { PlanosService } from './planos.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  salarioMensal = '';
  listaPlanos: PlanosModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicePlanos: PlanosService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.salarioMensal = queryParams['salarioMensal'];

      this.selecionarPlanos(this.salarioMensal);
    });
  }

  selecionarPlanos(salarioMensal: string) {
    this.servicePlanos.listasPlanos(salarioMensal)
      .subscribe(dados => {
        console.log(dados);

        const arrayPlanos: any = dados;

        this.listaPlanos = arrayPlanos.planos
        console.log(this.listaPlanos);
      })
  }

}
