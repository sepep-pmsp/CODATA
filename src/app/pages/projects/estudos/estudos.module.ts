import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudosCardComponent } from './estudos-card/estudos-card.component';
import { EstudosPageComponent } from './estudos-page/estudos-page.component';
import { EstudosRoutingModule } from './estudos-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        EstudosCardComponent,
        EstudosPageComponent
    ],
    imports: [
        CommonModule,
        EstudosRoutingModule,
    ],
    exports:[
        EstudosCardComponent,
        EstudosPageComponent
    ]
})
export class EstudosModule { }
