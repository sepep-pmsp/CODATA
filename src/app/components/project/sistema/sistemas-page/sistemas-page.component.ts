import { Component, OnInit } from '@angular/core';
import { Sistemas } from '../sistemas.model';
import { ActivatedRoute } from '@angular/router';
import { SistemasService } from '../sistemas-service.service';

@Component({
  selector: 'app-sistemas-page',
  templateUrl: './sistemas-page.component.html',
  styleUrl: './sistemas-page.component.scss'
})
export class SistemasPageComponent implements OnInit {
  sistema: Sistemas | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sistemasService: SistemasService
  ) {}

  ngOnInit(): void {
    // Pegamos o parâmetro `url` da rota
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      // Buscar o projeto usando o `url` do sistema
      this.sistemasService.buscarPorUrl(url).subscribe((sistema) => {
        this.sistema = sistema;
      });
    }
  }
}
