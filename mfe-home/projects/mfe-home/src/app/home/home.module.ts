import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidatorsComponent } from '../form-validators/form-validators.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [
        HomeComponent,
        FormValidatorsComponent

    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot({
          dropSpecialCharacters: true
        })
    ],
    providers: []
})
export class HomeModule { }
