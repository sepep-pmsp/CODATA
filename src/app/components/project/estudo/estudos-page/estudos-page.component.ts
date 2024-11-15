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

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudosdService: EstudosService,
  ) {}

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      this.estudosdService.buscarPorUrl(url).subscribe((estudo) => {
        this.estudo = estudo;
      });
    }
  }

  slides = [
    { id: 'slide-1', image: 'https://picsum.photos/id/1041/800/450', thumb: 'https://picsum.photos/id/1041/150/150', caption: 'Photo: Tim Marshall', class_img:'image_caption' },
    { id: 'slide-2', image: 'https://picsum.photos/id/1043/800/450', thumb: 'https://picsum.photos/id/1043/150/150', caption: 'Photo: Christian Joudrey' },
    { id: 'slide-3', image: 'https://picsum.photos/id/1044/800/450', thumb: 'https://picsum.photos/id/1044/150/150', caption: 'Photo: Steve Carter' },
    { id: 'slide-4', image: 'https://picsum.photos/id/1045/800/450', thumb: 'https://picsum.photos/id/1045/150/150', caption: 'Photo: Aleksandra Boguslawska' },
    { id: 'slide-5', image: 'https://picsum.photos/id/1049/800/450', thumb: 'https://picsum.photos/id/1049/150/150', caption: 'Photo: Rosan Harmens' },
    { id: 'slide-6', image: 'https://picsum.photos/id/1052/800/450', thumb: 'https://picsum.photos/id/1052/150/150', caption: 'Photo: Annie Spratt' }
  ];
}
