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
  clienteDados: any = '';
  cpf = '';
  userData = false;

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

    this.cadastroForm = new FormGroup({
      nomeCompleto: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      cpf: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      dataNascimento: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dataCadastro: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      salarioMensal: new FormControl (null, [Validators.required]),
      senha: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      endereco: new FormGroup({
        cep: new FormControl (null, [Validators.required]),
        numero: new FormControl (null, Validators.required),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl (null, Validators.required),
        cidade: new FormControl (null, Validators.required),
        estado: new FormControl (null, Validators.required),
      }),
      numeroCelular: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(18)]),
      status: new FormControl (0)
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.userData = queryParams['dataTrue'];
      if (this.userData) {
        this.dadosUsuario(this.cpf)
      } else {
        this.cadastroForm.patchValue({
          cpf: this.cpf
        })
      }
    });
  }

  dadosUsuario(cpf: string) {
    this.cadastroService.inserirDados(cpf).subscribe(dados => {
      //console.log(dados);
      const conteudoForm: any = dados;
      this.clienteDados = conteudoForm.cliente
      //console.log(this.clienteDados)

      this.popularDados(this.clienteDados);
    });
  }

  popularDados(dados: DadosCadastrais) {
    this.cadastroForm.patchValue({
      nomeCompleto: dados.nomeCompleto,
      email: dados.email,
      cpf: dados.cpf,
      dataNascimento: dados.dataNascimento,
      dataCadastro: dados.dataCadastro,
      salarioMensal: dados.salarioMensal,
      senha: dados.senha,
      numeroCelular: dados.numeroCelular,
      endereco: {
        cep: dados.endereco.cep,
        numero: dados.endereco.numero,
        rua: dados.endereco.rua,
        bairro: dados.endereco.bairro,
        cidade: dados.endereco.cidade,
        estado: dados.endereco.estado,
      },
    })
  }

  onSubmit() {
    const salarioMensal = this.cadastroForm.value.salarioMensal.replace(',', '.');

    const dadosCliente = this.cadastroForm.value;
    this.cadastroService.cadastrarCliente(dadosCliente)
    if (dadosCliente) {
      this.router.navigate(['/selfie'], {
        queryParams: {
          cpf: this.clienteDados.cpf.replace(/(\.|\/|\-)/g,""),
          salarioMensal: salarioMensal
        },
      });
    } else {
      console.log('formulario invalido');
    }
  }

  consultaCEP() {
    let cep = this.cadastroForm.value.endereco.cep;

    this.cadastroService.consultaCEP(cep).subscribe((data) => {
      const endereco: any = data;
      this.cadastroForm.patchValue({
        endereco: {
          cep: endereco.cep,
          rua: endereco.logradouro,
          bairro: endereco.bairro,
          cidade: endereco.localidade,
          estado: endereco.uf,
        },
      });
    });
  }

  resetar() {
    this.cadastroForm.reset();
  }

  verificaValidTouched(campo: any){

    return !this.cadastroForm.get(campo)?.valid &&
      this.cadastroForm.get(campo)?.touched

    //return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
