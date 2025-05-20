import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { AtividadeComponent } from './pages/atividade/atividade.component';
import { AtividadePopupComponent } from './pages/home/sections/atividade-popup/atividade-popup.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pop-up/:slug', component: AtividadePopupComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'atribuicoes', component: AtividadeComponent },
  { path: 'contato', component: ContactComponent },
  {
    path: 'projetos',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
