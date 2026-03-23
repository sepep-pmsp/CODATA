import { Component } from '@angular/core';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';
import { Dashboard } from '../../../../shared/models/dashboard.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent extends BasePageComponent<Dashboard> {
    override afterItemLoad(item: Dashboard): void {
        this.dashboard = item;
        if (item.dashboard) {
            this.safeDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.dashboard);
        }
    }

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) {
        super(contentService, activatedRoute, 'dashboard');
    }

    dashboard: any;
    safeDashboardUrl: SafeResourceUrl | undefined;
    isPopupOpen = false;

    togglePopup(): void {
        this.isPopupOpen = !this.isPopupOpen;
    }
}
