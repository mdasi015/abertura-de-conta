import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
