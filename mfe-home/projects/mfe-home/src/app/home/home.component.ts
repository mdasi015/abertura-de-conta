import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf = '';
  cadastroForm!: FormGroup;
  canNavigate = false;

  constructor(
    private http: AutenticacaoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  consultaCPF() {
    this.http.verificarCPF(this.cpf)
    .subscribe((cliente) => {
      console.log(cliente);
      this.router.navigateByUrl('/cadastro');
    }, (error) => {
      console.log(`${error} Erro ao consultar API!`);
    });
  }

}
