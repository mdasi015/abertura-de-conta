import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './planos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlanosComponent
  ],
  imports: [
    CommonModule,
    PlanosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlanosModule { }
