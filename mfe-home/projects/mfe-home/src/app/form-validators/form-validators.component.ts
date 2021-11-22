import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormValidatorsComponent),
  multi: true
};

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class FormValidatorsComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){

    return !this.cadastroForm.get(campo)?.valid && this.cadastroForm.get(campo)?.touched

    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': !campo.valid && campo.touched,
      'has-feedback': !campo.valid && campo.touched
    }
  }

}
