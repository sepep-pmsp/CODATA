import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './projetos/project/project.component';
import { ItensProjectsComponent } from './projetos/itens-projects/itens-projects.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [HeaderComponent, ProjectComponent, ItensProjectsComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule { }
