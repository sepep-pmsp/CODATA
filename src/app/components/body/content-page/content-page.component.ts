import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {
  bigContents = [
    {
      buttonNews:'notícia',
      buttonProjects:'projeto',
      title: 'O Observatório de Indicadores da Cidade de São Paulo (ObservaSampa) é uma política pública de Estado de dados',
      date: new Date(2024, 10, 23)
    }
  ];

  smallContents = [
    {
      buttonLabel: 'projeto',
      title: 'quisquam est qui dolorem ipsum quia dolor sit amet neque porro',
      date: new Date(2024, 0, 2)
    },
    {
      buttonLabel: 'projeto',
      title: 'artigo discorre sobre...',
      date: new Date(2024, 0, 2)
    },
    {
      buttonLabel: 'projeto',
      title: 'desenvolvimento Web .....',
      date: new Date(2024, 0, 2)
    }
  ];


  partners = [
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner0' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner1' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner2' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner3' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner4' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner5' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner6' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner7' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner8' },
    { imgSrc: '../../../../assets/logos/logo-prefeitura.svg', altText: 'partner9' },
  ];

  repositoryData = [
    { class: 'repositories', number: 5, text: 'repositorios' },
    { class: 'projects', number: 10, text: 'projetos' },
    { class: 'partners', number: 20, text: 'parceiros' }
  ];
  
  popupMapping: { [key: string]: number } = {
    'ObtencaoLimpezaDados': 0,
    'AutomacaoDeRotinas': 1,
    'AnaliseDeDados': 2,
    'DesenvolvimentoDePaineisGerenciais': 3,
    'ApoioaContratacaoDeSistemas': 4,
    'DesignDeInterfaces': 5,
    'DesenvolvimentoWeb': 6,
  };

  openedPopupSlug: string | null = null;
  openedPopupIndex: null | undefined;
  atividades: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug && this.popupMapping[slug] !== undefined) {
        this.openPopup(slug);
      }
    });

    this.dataService.getAtividades().subscribe((atividades) => {
      this.atividades = atividades;
    });
  }

  openPopup(slug: string) {
    this.openedPopupSlug = slug;
    this.router.navigate(['/pop-up', slug]);
  }

  closePopup() {
    this.openedPopupSlug = null;
    this.router.navigate(['/']);
  }
  isPopupOpen(slug: string): boolean {
    return this.openedPopupSlug === slug;
  }

}
