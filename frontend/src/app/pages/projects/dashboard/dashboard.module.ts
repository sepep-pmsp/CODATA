import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        DashboardCardComponent,
        DashboardPageComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
    ],
    exports:[
        DashboardCardComponent,
        DashboardPageComponent
    ]
})
export class DashboardModule { }
