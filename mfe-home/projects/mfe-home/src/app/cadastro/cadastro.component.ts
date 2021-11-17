import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { DadosCadastrais } from './dados-cadastrais';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  clientesCadastrados: DadosCadastrais[] = [];
  authGuard = false;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nomeCompleto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      dataCadastro: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      salarioMensal: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, CadastroService.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      numeroCelular: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  cadastrar() {
    const cadastroUsuario = this.cadastroForm.getRawValue() as DadosCadastrais;
    console.log(cadastroUsuario);
    this.router.navigateByUrl('selfie');
  }

}
