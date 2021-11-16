import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';


@NgModule({
    declarations: [
       InfosComponent

    ],
    imports: [
        BrowserModule,
        InfosRoutingModule,
        HttpClientModule,

    ],
    providers: []
})
export class InfosModule { }
