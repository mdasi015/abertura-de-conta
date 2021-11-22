import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { SelfieModule } from './selfie/selfie.module';
import { FormValidatorsComponent } from './form-validators/form-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    FormValidatorsComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroModule,
    SelfieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
