import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfieRoutingModule } from './selfie-routing.module';
import { SelfieComponent } from './selfie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelfieComponent
  ],
  imports: [
    CommonModule,
    SelfieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SelfieModule { }
