import { Component, OnInit } from '@angular/core';

import { BancoDeDados, Dashboard, Estudos, Sistemas } from '../../../data.model';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../projeto.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projeto: Sistemas | Estudos | Dashboard | BancoDeDados | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      this.projetoService.buscarPorUrl(url).subscribe((projeto) => {
        this.projeto = projeto;
      });
    }
  }
}
