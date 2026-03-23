import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteCardComponent } from './site-card/site-card.component';
import { SitePageComponent } from './site-page/site-page.component';
import { SitesRoutingModule } from './sites-routing.module';




@NgModule({
    declarations: [
        SiteCardComponent,
        SitePageComponent,
    ],
    imports: [
        CommonModule,
        SitesRoutingModule,
    ],
    exports: [
        SiteCardComponent,
        SitePageComponent
    ]
})
export class SitesModule { }
