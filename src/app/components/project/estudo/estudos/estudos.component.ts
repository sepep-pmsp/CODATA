import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudosService } from '../estudos-service.service';
import { Estudos } from '../estudos.model';


@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrl: './estudos.component.scss'
})
export class EstudosComponent implements OnInit {
  estudos: Estudos[] = [];
  estud: Estudos | undefined;
  displayedProjects: Estudos[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudosService: EstudosService
  ) { }

  ngOnInit(): void {
    this.estudosService.getEstudos().subscribe((estudos) => {
      this.estudos = estudos;
      this.calculateTotalPages();
      this.updateDisplayedProjects();
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.estudosService.buscarPorUrl(String(id)).subscribe((estud) => {
        this.estud = estud;
      });
    }
  }
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.estudos.length / this.itemsPerPage);
  }

  updateDisplayedProjects(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProjects = this.estudos.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedProjects();
  }
}
