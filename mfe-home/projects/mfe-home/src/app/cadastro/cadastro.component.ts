import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { DadosCadastrais } from './dados-cadastrais';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  clientesCadastrados: DadosCadastrais[] = [];

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.cadastroForm = new FormGroup({
      nomeCompleto: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      cpf: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      dataNascimento: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dataCadastro: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      salarioMensal: new FormControl (null, [Validators.required]),
      senha: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      endereco: new FormGroup({
        cep: new FormControl (null, [Validators.required, CadastroService.cepValidator]),
        numero: new FormControl (null, Validators.required),
        complemento: new FormControl ( null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl (null, Validators.required),
        cidade: new FormControl (null, Validators.required),
        estado: new FormControl (null, Validators.required),
      }),
      numeroCelular: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  consultaCEP(cep: string) {
    this.http.get(`//viacep.com.br/ws/${cep}/json/`)
    .subscribe((dados: any) => console.log(dados))
  }

}


