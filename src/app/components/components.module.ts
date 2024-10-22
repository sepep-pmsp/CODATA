import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './body/header/header.component';
import { HomeComponent } from './body/home/home.component';
import { RouterModule } from '@angular/router';
import { SistemasComponent } from './project/sistemas/sistemas.component';
import { BdPageComponent } from './project/bd-page/bd-page.component';
import { ProjectComponent } from './project/projetos/project/project.component';
import { EstudosComponent } from './project/estudo/estudos/estudos.component';
import { DeshboardsComponent } from './project/dashboard/deshboards/deshboards.component';
import { PagesProjectsComponent } from './project/projetos/pages-projects/pages-projects.component';
import { ContentPageComponent } from './body/content-page/content-page.component';





@NgModule({
  declarations: [
    HeaderComponent, 
    ProjectComponent, 
    HomeComponent, 
    EstudosComponent, 
    DeshboardsComponent, 
    PagesProjectsComponent, 
    SistemasComponent, 
    BdPageComponent, ContentPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule { }
