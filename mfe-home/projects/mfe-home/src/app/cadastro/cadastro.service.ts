import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DadosCadastrais } from './dados-cadastrais';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(cadastro: DadosCadastrais) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes', cadastro);
  }

  verificaUsuarioExistente(cpf: string) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF', cpf)
  }

  static cepValidator(control: FormControl){
    const cep = control.value;
    if (cep && cep !== ''){
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }


}
