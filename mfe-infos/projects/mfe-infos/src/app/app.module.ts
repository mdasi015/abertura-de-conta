import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfosModule } from './infos/infos.module';
import { PlanosModule } from './planos/planos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InfosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PlanosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }