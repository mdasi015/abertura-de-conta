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
}
