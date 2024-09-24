import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagesProjectsComponent } from './components/projetos/pages-projects/pages-projects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'projetos/:id', component: PagesProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
