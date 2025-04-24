import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCardComponent } from './api-card/api-card.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { ApisRoutingModule } from './apis-routing.module';



@NgModule({
    declarations: [
        ApiCardComponent,
        ApiPageComponent
    ],
    imports: [
        CommonModule,
        ApisRoutingModule
    ],
    exports: [
        ApiCardComponent,
        ApiPageComponent,
        ApisRoutingModule
    ]
})
export class ApisModule { }
