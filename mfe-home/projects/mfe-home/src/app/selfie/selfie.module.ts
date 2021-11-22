import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfieRoutingModule } from './selfie-routing.module';
import { SelfieComponent } from './selfie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SelfieComponent
  ],
  imports: [
    CommonModule,
    SelfieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SelfieModule { }
