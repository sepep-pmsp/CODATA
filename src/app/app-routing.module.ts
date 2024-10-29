import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ContentPageComponent } from './components/body/content-page/content-page.component';
import { ProjectsComponent } from './components/project/project';
import { SistemasComponent } from './components/project/sistema/sistemas/sistemas.component';


const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'pop-up/:slug', component: ContentPageComponent },
  { path: 'projetos/:filter', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
