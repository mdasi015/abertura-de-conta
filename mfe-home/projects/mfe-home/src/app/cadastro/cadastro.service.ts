import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DadosCadastrais } from './dados-cadastrais';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(cadastro: DadosCadastrais) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes', cadastro);
  }

  inserirDados(cpf: string) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF',
      { cpf : cpf} );
  }

  consultaCEP(cep: string){
    console.log(cep);
    cep = cep.toString().replace(/\D/g, '');
    if (cep !== ''){
      const validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of ({});
  }



}
