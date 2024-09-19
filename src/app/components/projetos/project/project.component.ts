import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Projeto } from '../projeto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  projetos: Projeto[] = [];
  currentSlide = 0;
  maxSlide = 0;
  projeto: Projeto | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    this.projetoService.getProjetos().subscribe((projetos) => {
      this.projetos = projetos;
      this.maxSlide = Math.ceil(this.projetos.length / 3) - 1; 
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.projetoService.buscarPorId(Number(id)).subscribe((projeto) => {
        this.projeto = projeto;
      });
    }
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

}
