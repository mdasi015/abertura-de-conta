import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlterarPlanos } from './alterar-planos-model';
import { PlanosModel } from './planos-model';
import { PlanosService } from './planos.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  salarioMensal = '';
  cpf = '';
  listaPlanos: PlanosModel[] = [];
  formPlanos!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicePlanos: PlanosService
  ) {
    this.formPlanos = new FormGroup({
      _id: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.salarioMensal = queryParams['salarioMensal'];
      this.cpf = queryParams['cpf'];

      this.selecionarPlanos(this.salarioMensal);
    });
  }

  selecionarPlanos(salarioMensal: string) {
    this.servicePlanos.listasPlanos(salarioMensal)
      .subscribe((dados: any) => {
        console.log(dados);

        const arrayPlanos: any = dados;

        this.listaPlanos = arrayPlanos.planos
        console.log(this.listaPlanos);
      });
  }

  onSubmit() {
    const id = this.formPlanos.value._id;
    const planoEscolhido = this.filtroDeplanos(id);
    const alteracaoPlano: AlterarPlanos = {
      cpf: this.cpf,
      plano: {
        custoMensal: planoEscolhido[0].custoMensal,
        tipoCartao: planoEscolhido[0].tipoCartao,
        tipoConta: planoEscolhido[0].tipoConta,
      }
    }
    this.servicePlanos.alterarPlanos(alteracaoPlano)
      .subscribe(dados => {
        console.log(dados)
      });

    if (planoEscolhido) {
      this.router.navigate(['infos'], {
        queryParams: {
          cpf: this.cpf
        },
      });
    }

  }

  filtroDeplanos(id: string) {
    const planoSelecionado = this.listaPlanos.filter(plano => {
      return plano._id === id;
    });
    return planoSelecionado;
  }

}
