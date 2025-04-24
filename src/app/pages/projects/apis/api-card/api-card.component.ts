import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';
import { Api } from '../../../../shared/models/api.model';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';

@Component({
    selector: 'app-api-card',
    templateUrl: './api-card.component.html',
    styleUrl: './api-card.component.scss'
})
export class ApiCardComponent extends BaseCardComponent<Api>{
    displayedProjects: Api[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
      ) {
        super(contentService, activatedRoute, 'api');
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
