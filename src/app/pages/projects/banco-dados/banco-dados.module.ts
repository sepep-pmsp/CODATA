import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoDadosPageComponent } from './banco-dados-page/banco-dados-page.component';
import { BancoDadosCardComponent } from './banco-dados-card/banco-dados-card.component';
import { BancoDadosRoutingModule } from './banco-dados-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        BancoDadosPageComponent,
        BancoDadosCardComponent
    ],
    imports: [
        CommonModule,
        BancoDadosRoutingModule,
    ],
    exports: [
        BancoDadosPageComponent,
        BancoDadosCardComponent
    ]
})
export class BancoDadosModule { }
