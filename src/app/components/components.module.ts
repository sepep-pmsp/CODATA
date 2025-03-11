import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './body/header/header.component';
import { HomeComponent } from './body/home/home.component';
import { RouterModule } from '@angular/router';
import { BdPageComponent } from './project/banco-dados/bd-page/bd-page.component';
import { ProjectComponent } from './project/projetos/projects/project.component';
import { EstudosComponent } from './project/estudo/estudos/estudos.component';
import { DeshboardsComponent } from './project/dashboard/deshboards/deshboards.component';
import { ContentPageComponent } from './body/content-page/content-page.component';
import { FooterComponent } from './body/footer/footer.component';
import { ProjectsComponent } from './project/project';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardPageComponent } from './project/dashboard/dashboard-page/dashboard-page.component';
import { BdComponent } from './project/banco-dados/bd/bd.component';
import { EstudosPageComponent } from './project/estudo/estudos-page/estudos-page.component';
import { SistemasComponent } from './project/sistema/sistemas/sistemas.component';
import { SistemasPageComponent } from './project/sistema/sistemas-page/sistemas-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AssignmentsPageComponent } from './pages/assignments-page/assignments-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ApiComponent } from './project/apis/api/api.component';
import { ApiPageComponent } from './project/apis/api-page/api-page.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    ProjectComponent, 
    HomeComponent, 
    EstudosComponent, 
    DeshboardsComponent, 
    SistemasComponent, 
    BdPageComponent, 
    ContentPageComponent, 
    FooterComponent,
    ProjectsComponent,
    DashboardPageComponent,
    BdComponent,
    EstudosPageComponent,
    SistemasPageComponent,
    TeamPageComponent,
    AssignmentsPageComponent,
    ContactComponent,
    ApiComponent,
    ApiPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [HeaderComponent, HomeComponent , FooterComponent, ProjectsComponent],
})
export class ComponentsModule { }
