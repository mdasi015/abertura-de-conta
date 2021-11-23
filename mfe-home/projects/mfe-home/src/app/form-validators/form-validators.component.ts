import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.scss']
})
export class FormValidatorsComponent implements OnInit {

  cadastroForm!: FormGroup;

  @Input() mostrarErro!: boolean;
  @Input() msgErro!: string;

  constructor() { }

  ngOnInit(): void {
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
