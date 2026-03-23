import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCardComponent } from './api-card/api-card.component';
import { ApiPageComponent } from './api-page/api-page.component';

const routes: Routes = [
    { path: '', component: ApiCardComponent },
    { path: ':url', component: ApiPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApisRoutingModule { }
