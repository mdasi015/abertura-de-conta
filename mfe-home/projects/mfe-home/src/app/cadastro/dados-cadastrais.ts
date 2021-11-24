export interface DadosCadastrais {
  nomeCompleto: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  dataCadastro: string;
  salarioMensal: string;
  senha: string;
  endereco: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  numeroCelular: string;
}
