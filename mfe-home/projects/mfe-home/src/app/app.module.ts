import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { SelfieModule } from './selfie/selfie.module';

@NgModule({
  declarations: [
    AppComponent,
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
