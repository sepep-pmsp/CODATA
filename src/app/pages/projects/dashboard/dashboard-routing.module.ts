import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


const routes: Routes = [
    { path: '', component: DashboardCardComponent},
    { path: ':url', component: DashboardPageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
