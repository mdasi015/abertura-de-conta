import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss']
})
export class SelfieComponent implements OnInit {

  cpf: string = '';
  salarioMensal: string = '';
  API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage';
  urlFoto = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  onChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const selfie = event.target.files[0];

      const formData = new FormData();
      formData.append('filetoupload', selfie);

      this.http.post(this.API, formData)
        .subscribe((resposta) => {
          console.log('Upload ok');
          console.log(resposta);

          const foto: any = resposta;

          this.urlFoto = foto.url;
        });
    }
  }


  ngOnInit(): void {
      this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = queryParams['salarioMensal'];
    });
  }

  avancarPage() {
    const confirmaSelfie = window.confirm(
      'Foto enviada com sucesso!'
    );
    if (confirmaSelfie) {
      this.router.navigate(['/planos'], {
        queryParams: {
          cpf: this.cpf,
          salarioMensal: this.salarioMensal,
        },
      });
    }
  }

}
