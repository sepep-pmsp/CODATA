import { Component, OnInit } from '@angular/core';
import { Api } from '../api.model';
import { ApisService } from '../apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent implements OnInit {
  apis: Api[] = [];
  api: Api | undefined;
  displayedProjects: Api[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apisService: ApisService
  ) { }

  ngOnInit(): void {
    this.apisService.getApi().subscribe((apis) => {
      this.apis = apis;
      this.calculateTotalPages();
      this.updateDisplayedProjects();
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.apisService.buscarPorUrl(String(id)).subscribe((api) => {
        this.api = api;
      });
    }
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
