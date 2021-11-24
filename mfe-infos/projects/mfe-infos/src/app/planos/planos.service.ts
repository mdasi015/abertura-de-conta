import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  constructor(private http: HttpClient) { }

  listasPlanos(rendaMensal: string) {

    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Planos/planosDisponiveis',
      {
        rendaMensal: rendaMensal
      })
  }
}
