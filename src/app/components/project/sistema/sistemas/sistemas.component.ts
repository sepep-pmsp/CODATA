import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SistemasService } from '../sistemas-service.service';
import { Sistemas } from '../sistemas.model';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.scss'
})
export class SistemasComponent implements OnInit {
  sistemas: Sistemas[] = [];
  displayedProjects: Sistemas[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sistemasService: SistemasService
  ) {}

  ngOnInit(): void {
    this.sistemasService.getSistemas().subscribe((sistemas) => {
      this.sistemas = sistemas;
      this.calculateTotalPages();
      this.updateDisplayedProjects();
    });
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.sistemas.length / this.itemsPerPage);
  }

  updateDisplayedProjects(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProjects = this.sistemas.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedProjects();
  }
}