import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApisModule } from './apis/apis.module';
import { BancoDadosModule } from './banco-dados/banco-dados.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EstudosModule } from './estudos/estudos.module';
import { SistemasModule } from './sistemas/sistemas.module';
import { SitesModule } from './sites/sites.module';
import { ProjectFilterComponent } from '../../shared/components/project-filter/project-filter.component';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ProjectViewComponent } from '../../shared/components/project-view/project-view.component';



@NgModule({
    declarations: [
        ProjectCardComponent,
        ProjectFilterComponent,
        ProjectGridComponent,
        PaginationComponent,
        ProjectViewComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        ApisModule,
        BancoDadosModule,
        DashboardModule,
        EstudosModule,
        SistemasModule,
        SitesModule,
    ],
    exports:[
        ProjectCardComponent,
        ApisModule,
        BancoDadosModule,
        DashboardModule,
        EstudosModule,
        SistemasModule,
        SitesModule,
        ProjectsRoutingModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        ProjectViewComponent,
    ]
})
export class ProjectsModule { }
