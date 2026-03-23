import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AtividadePopupComponent } from '../home/sections/atividade-popup/atividade-popup.component';

const routes: Routes = [
    {
        path: 'sistemas',
        loadChildren: () =>
            import('./sistemas/sistemas.module').then((m) => m.SistemasModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'apis',
        loadChildren: () =>
            import('./apis/apis.module').then((m) => m.ApisModule),
    },
    {
        path: 'estudos',
        loadChildren: () =>
            import('./estudos/estudos.module').then((m) => m.EstudosModule),
    },
    {
        path: 'banco-dados',
        loadChildren: () =>
            import('./banco-dados/banco-dados.module').then((m) => m.BancoDadosModule),
    },
    {
        path: 'sites',
        loadChildren: () =>
            import('./sites/sites.module').then((m) => m.SitesModule),
    },
    { path: ':filter', component: ProjectCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
