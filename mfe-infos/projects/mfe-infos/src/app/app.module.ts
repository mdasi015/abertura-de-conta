import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
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
    PlanosModule,
    DashboardModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true  // ao salvar, vai manter a mascara
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
