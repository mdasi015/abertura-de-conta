import { HomeService } from './home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private homeService: HomeService,
    private router: Router,
  ) {

    this.cadastroForm = new FormGroup({
      cpf: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  consultaCPF() {
    console.log(this.cadastroForm);
    const cpfCliente = this.cadastroForm.value.cpf
    this.homeService.verificarCPF(cpfCliente)
    .subscribe((infos) => {
      const dados: any = infos
      if (dados.cliente) {
        this.router.navigate(['cadastro'], { queryParams: { cpf: cpfCliente , dataTrue: true } });
      } else {
        this.router.navigate(['cadastro'], { queryParams: { cpf: cpfCliente } });
      }
    }, (error) => {
      console.log(`${error} Erro ao consultar API!`);
    });
  }

}
