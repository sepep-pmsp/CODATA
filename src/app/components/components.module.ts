import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './projetos/project/project.component';
import { HomeComponent } from './home/home.component';
import { EstudosComponent } from './estudo/estudos/estudos.component';
import { DeshboardsComponent } from './dashboard/deshboards/deshboards.component';
import { DesignComponent } from './design/design/design.component';
import { PagesProjectsComponent } from './projetos/pages-projects/pages-projects.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent, 
    ProjectComponent, 
    HomeComponent, 
    EstudosComponent, 
    DeshboardsComponent, 
    DesignComponent, 
    PagesProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule { }
