import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';
import { Site } from '../../../../shared/models/site.model';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrl: './site-card.component.scss'
})
export class SiteCardComponent extends BaseCardComponent<Site> {
    displayedProjects: Site[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'site');
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
}