export interface DadosCliente {
  endereco: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  plano: {
    custoMensal: string;
    tipoCartao: string;
    tipoConta: string;
  };
  _id: string;
  nomeCompleto: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  dataCadastro: string;
  salarioMensal: string;
  senha: string;
  numeroCelular: string;
  status: number;
  __v: number;
  urlImagem: string;
}
