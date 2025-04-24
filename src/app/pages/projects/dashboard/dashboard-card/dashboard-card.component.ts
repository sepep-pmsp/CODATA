import { Component } from '@angular/core';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from '../../../../shared/models/dashboard.model';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent extends BaseCardComponent<Dashboard> {
    displayedProjects: Dashboard[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;


    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'dashboard');
    }
    calculateTotalPages(): void {
        this.totalPages = Math.ceil(this.apis.length / this.itemsPerPage);
    }

    updateDisplayedProjects(): void {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.displayedProjects = this.apis.slice(startIndex, endIndex);
    }

    goToPage(page: number): void {
        this.currentPage = page;
        this.updateDisplayedProjects();
    }

    dashboard_image = [
        { class: 'img_dash00', img_class: 'image00', backgroundColor: '#232323', img: 'assets/images/grafic.svg', repeat: 2, },
        { class: 'img_dash01', img_class: 'image01', backgroundColor: '#CACACA', img: 'assets/images/grafic.svg', repeat: 4, },
        { class: 'img_dash02', img_class: 'image02', backgroundColor: '#000000', img: 'assets/images/grafic.svg', repeat: 1, },
    ]
}
