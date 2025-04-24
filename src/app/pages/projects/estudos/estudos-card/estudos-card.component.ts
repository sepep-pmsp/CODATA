import { Component } from '@angular/core';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';
import { Estudos } from '../../../../shared/models/estudos.model';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-estudos-card',
    templateUrl: './estudos-card.component.html',
    styleUrl: './estudos-card.component.scss'
})
export class EstudosCardComponent extends BaseCardComponent<Estudos> {
    displayedProjects: Estudos[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'estudos');
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
