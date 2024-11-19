import { Component, OnInit } from '@angular/core';
import { EstudosService } from '../estudos-service.service';
import { Estudos } from '../../../data.model';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
  }

  slides: { image: string; caption: string }[] = [
    { image: 'https://picsum.photos/id/1041/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    { image: 'https://picsum.photos/id/1043/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    { image: 'https://picsum.photos/id/1044/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    { image: 'https://picsum.photos/id/1045/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    { image: 'https://picsum.photos/id/1049/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    { image: 'https://picsum.photos/id/1041/800/450', 
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus justo. Nunc at faucibus enim. Integer ac malesuada purus, sit amet consectetur sapien. Etiam sed imperdiet elit. Sed sollicitudin rhoncus turpis, ut dapibus nisl aliquet sed. Aliquam ac tristique mauris. Etiam tincidunt neque eros, sed mattis ante tincidunt a. Donec placerat ligula nulla, vel porttitor felis luctus vitae.' },
    
  ];

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
