import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiteCardComponent } from './site-card/site-card.component';
import { SitePageComponent } from './site-page/site-page.component';


const routes: Routes = [
    { path: '', component: SiteCardComponent },
    { path: ':url', component: SitePageComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitesRoutingModule { }
