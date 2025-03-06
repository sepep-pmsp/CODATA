import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SistemasService } from '../sistemas-service.service';
import { Sistemas } from '../sistemas.model';

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
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      this.sistemasService.buscarPorUrl(url).subscribe((sistema) => {
        this.sistema = sistema;
      });
    }
    const scrollContainer = document.querySelector('.page_system--row');
      if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        (scrollContainer as HTMLElement).scrollLeft += (event as WheelEvent).deltaY;
      });
    }
  }
}