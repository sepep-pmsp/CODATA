import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BancoDadosCardComponent } from './banco-dados-card/banco-dados-card.component';
import { BancoDadosPageComponent } from './banco-dados-page/banco-dados-page.component';



const routes: Routes = [
    { path: '', component: BancoDadosCardComponent },
    { path: ':url', component: BancoDadosPageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BancoDadosRoutingModule { }
