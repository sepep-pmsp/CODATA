import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../pages/assignments-page/service/assignments.service';
import { Destaques } from './service/destaques.model';
import { Partners } from './service/partners.model';
import { ContentService } from './service/content.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {
  openedPopupSlug: string | null = null;
  openedPopupIndex: null | undefined;
  atividades: any[] = [];
  contents: Destaques[] = [];
  partners: Partners [] = [];
  smallContents: any[] = [];
  bigContents: any[] = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService,
    private assignmentsService: AssignmentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug && this.popupMapping[slug] !== undefined) {
        this.openPopup(slug);
      }
    });

    this.assignmentsService.getAtividades().subscribe((atividades) => {
      this.atividades = atividades;
    });

    this.contentService.getContents().subscribe((data) => {
      this.bigContents = data.bigContents;
      this.smallContents = data.smallContents;
    });

    this.contentService.getPartners().subscribe((partners) => {
      this.partners = partners;
    });
  }

  openPopup(slug: string) {
    this.openedPopupSlug = slug;
    this.router.navigate(['/pop-up', slug]);
  
    setTimeout(() => {
      this.scrollToPopup();
    }, 0);
  }  
  
  closePopup() {
    const scrollY = window.scrollY;
    this.openedPopupSlug = null;
  
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, scrollY); 
    });
  }      
  
  scrollToPopup() {
    setTimeout(() => {
      const popup = document.querySelector('.pop-up');
      if (popup) {
        const popupPosition = popup.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        
        window.scrollTo({
          top: popupPosition - windowHeight / 2 + popup.clientHeight / 2,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  isPopupOpen(slug: string): boolean {
    return this.openedPopupSlug === slug;
  }


  navigateToAssignments(slug: string): void {
    this.router.navigate(['/atribuicoes'], { queryParams: { slug } });
  }


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
}
