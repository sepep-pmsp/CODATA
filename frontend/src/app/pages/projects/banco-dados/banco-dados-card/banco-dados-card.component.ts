import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';
import { BancoDeDados } from '../../../../shared/models/bancoDeDados.model';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';

@Component({
    selector: 'app-banco-dados-card',
    templateUrl: './banco-dados-card.component.html',
    styleUrls: ['./banco-dados-card.component.scss']
})
export class BancoDadosCardComponent extends BaseCardComponent<BancoDeDados> {
    displayedProjects: BancoDeDados[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
      ) {
        super(contentService, activatedRoute, 'bancoDeDados');
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
