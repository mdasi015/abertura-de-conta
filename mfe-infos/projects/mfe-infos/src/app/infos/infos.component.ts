import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DadosCliente } from './dados-cliente';
import { InfosService } from './infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  infosCliente!: DadosCliente;
  cpf: string = '';

  constructor(
    private infosService: InfosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
    });
    this.confirmaForm();
   }

  ngOnInit(): void {
  }

  confirmaForm() {
    this.infosService.retornarDados(this.cpf).subscribe((dados) => {
      const dadosRetornados: any = dados;
      this.infosCliente = dadosRetornados.cliente;
    });
  }

  confirmaDados() {
    this.router.navigate(['dashboard'])
  }

  onBack() {
    this.router.navigate(['cadastro'], {
      queryParams: { cpf: this.cpf, dataTrue: true },
    });
   }


}
