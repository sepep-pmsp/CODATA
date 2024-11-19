import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ContentPageComponent } from './components/body/content-page/content-page.component';
import { ProjectsComponent } from './components/project/project';
import { SistemasComponent } from './components/project/sistema/sistemas/sistemas.component';
import { SistemasPageComponent } from './components/project/sistema/sistemas-page/sistemas-page.component';
import { DashboardPageComponent } from './components/project/dashboard/dashboard-page/dashboard-page.component';
import { EstudosPageComponent } from './components/project/estudo/estudos-page/estudos-page.component';
import { BdPageComponent } from './components/project/banco-dados/bd-page/bd-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'pop-up/:slug', component: ContentPageComponent },
  { path: 'projetos/:filter', component: ProjectsComponent },
  { path: 'sistemas/:url', component: SistemasComponent },
  { path: 'sistemas/detalhes/:url', component: SistemasPageComponent },
  { path: 'dashboard/page/:url', component: DashboardPageComponent },
  { path: 'estudo/article/:url', component: EstudosPageComponent },
  { path: 'banco_de_dados/info/:url', component: BdPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
