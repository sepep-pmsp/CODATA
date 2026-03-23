import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { DestaquesSectionComponent } from './home/sections/destaques-section/destaques-section.component';
import { AtividadePopupComponent } from './home/sections/atividade-popup/atividade-popup.component';
import { HomeButtonsComponent } from './home/sections/home-buttons/home-buttons.component';
import { ParceirosComponent } from './home/sections/parceiros/parceiros.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectsModule } from './projects/projects.module';
import { AtividadeComponent } from './atividade/atividade.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AboutSectionComponent } from './home/sections/about-section/about-section.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutSectionComponent,
    ContactComponent,
    TeamComponent,
    DestaquesSectionComponent,
    AtividadePopupComponent,
    HomeButtonsComponent,
    ParceirosComponent,
    AtividadeComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ProjectsModule,
    CommonModule,
    BrowserModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[HomeComponent, CommonModule,
    BrowserModule,]
})
export class PagesModule { }
