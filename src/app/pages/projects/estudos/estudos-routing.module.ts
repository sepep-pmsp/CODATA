import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstudosCardComponent } from './estudos-card/estudos-card.component';
import { EstudosPageComponent } from './estudos-page/estudos-page.component';



const routes: Routes = [
    { path: '', component: EstudosCardComponent },
    { path: ':url', component: EstudosPageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstudosRoutingModule { }
