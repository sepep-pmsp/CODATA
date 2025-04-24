import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasCardComponent } from './sistemas-card/sistemas-card.component';
import { SistemasPageComponent } from './sistemas-page/sistemas-page.component';
import { SistemasRoutingModule } from './sistemas-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        SistemasCardComponent,
        SistemasPageComponent
    ],
    imports: [
        CommonModule,
        SistemasRoutingModule,
    ],
    exports:[
        SistemasCardComponent,
        SistemasPageComponent
    ]
})
export class SistemasModule { }
