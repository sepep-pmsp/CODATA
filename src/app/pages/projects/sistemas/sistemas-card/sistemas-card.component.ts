import { Component } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Sistemas } from '../../../../shared/models/sistemas.model';
import { BaseCardComponent } from '../../../../shared/components/base/base-card.component';

@Component({
  selector: 'app-sistemas-card',
  templateUrl: './sistemas-card.component.html',
  styleUrl: './sistemas-card.component.scss'
})
export class SistemasCardComponent extends BaseCardComponent<Sistemas>{
    displayedProjects: Sistemas[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 1;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
      ) {
        super(contentService, activatedRoute, 'sistemas');
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