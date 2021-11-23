import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { FormValidatorsComponent } from '../form-validators/form-validators.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends FormValidatorsComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
  ) {
    super();

    this.cadastroForm = new FormGroup({
      cpf: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  consultaCPF() {
    console.log(this.cadastroForm);
    const cpfCliente = this.cadastroForm.value.cpf
    this.autenticacaoService.verificarCPF(cpfCliente)
    .subscribe((infos) => {
      const dados: any = infos.cliente
      if (dados) {
        this.router.navigate(['cadastro'], { queryParams: { cpf: cpfCliente , dataTrue: true } });
      } else {
        this.router.navigate(['cadastro'], { queryParams: { cpf: cpfCliente } });
      }
    }, (error) => {
      console.log(`${error} Erro ao consultar API!`);
    });
  }

}
