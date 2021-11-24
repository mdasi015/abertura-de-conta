export interface AlterarPlanos {
  cpf: string;
  plano: {
    custoMensal: string;
    tipoCartao: string;
    tipoConta: string;
  };
}
