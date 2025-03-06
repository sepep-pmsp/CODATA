import { Component, OnInit } from '@angular/core';
import { EstudosService } from '../estudos-service.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Estudos } from '../estudos.model';

@Component({
  selector: 'app-estudos-page',
  templateUrl: './estudos-page.component.html',
  styleUrl: './estudos-page.component.scss'
})
export class EstudosPageComponent implements OnInit {
  estudo: Estudos | undefined;
  safeestudosdUrl: SafeResourceUrl | undefined;
  isPopupOpen = false;
  currentSlide: number = 0;
  activeThumbnail: number = 0;
  visibleSlides: { image: string; caption: string }[] = [];
  thumbnailStartIndex: number = 0;
  thumbnailLimit: number = 4;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudosdService: EstudosService,
  ) {}

  ngOnInit(): void {
    this.updateVisibleThumbnails();
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      this.estudosdService.buscarPorUrl(url).subscribe((estudo) => {
        this.estudo = estudo;
      });
    }
    if (url) {
      this.estudosdService.buscarPorUrl(url).subscribe((estudo) => {
        this.estudo = estudo;
  
        // Verificar se slides existe antes de atribuir
        this.slides = estudo?.slides ?? []; // Use array vazio se undefined
        this.updateVisibleThumbnails();
      });
    }
  }

  slides: { image: string; caption: string }[] = [];

  nextSlide() {
    const totalSlides = this.slides.length;
    this.activeThumbnail = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
      this.thumbnailStartIndex++;
    }

    this.updateVisibleThumbnails();
  }

  setSlide(index: number) {
    this.activeThumbnail = index;
    this.currentSlide = index;
    if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
      this.thumbnailStartIndex = this.currentSlide - this.thumbnailLimit + 1;
    } else if (this.currentSlide < this.thumbnailStartIndex) {
      this.thumbnailStartIndex = this.currentSlide;
    }
    this.updateVisibleThumbnails();
  }

  updateVisibleThumbnails() {
    this.visibleSlides = this.slides.slice(
      this.thumbnailStartIndex,
      this.thumbnailStartIndex + this.thumbnailLimit
    );
  }
}
