import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SistemasCardComponent } from './sistemas-card/sistemas-card.component';
import { SistemasPageComponent } from './sistemas-page/sistemas-page.component';


const routes: Routes = [
    { path: '', component: SistemasCardComponent },
    { path: 'detalhes/:url', component: SistemasPageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemasRoutingModule { }
