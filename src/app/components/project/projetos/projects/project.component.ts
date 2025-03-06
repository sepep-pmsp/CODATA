import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Sistemas } from '../../sistema/sistemas.model';
import { Estudos } from '../../estudo/estudos.model';
import { Dashboard } from '../../dashboard/dashboard.model';
import { BancoDeDados } from '../../banco-dados/bancoDeDados.model';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{
  projetos: (Sistemas | Estudos | Dashboard | BancoDeDados)[] = [];
  displayedProjects: (Sistemas | Estudos | Dashboard | BancoDeDados)[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 1;

  constructor(private projetoService: ProjetoService) {}

  ngOnInit(): void {
    this.projetoService.getAllProjects().subscribe((projetos) => {
      this.projetos = projetos;
      this.totalPages = Math.ceil(this.projetos.length / this.itemsPerPage);
      this.updateDisplayedProjects();
    });
  }

  updateDisplayedProjects(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProjects = this.projetos.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedProjects();
  }

  getProjectLink(projeto: Sistemas | Estudos | Dashboard | BancoDeDados): string[] {
    if ('dashboard' in projeto) return ['/dashboard/page', projeto.url];
    if ('bancoDados' in projeto) return ['/banco_de_dados/info', projeto.url];
    if ('estudos' in projeto) return ['/estudo/article', projeto.url];
    return ['/sistemas/detalhes', projeto.url];
  }
}
