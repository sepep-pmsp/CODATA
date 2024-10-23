import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  atividades = [
    {
      slug: 'ObtencaoLimpezaDados',
      class: 'obt-limp-dd',
      text: 'obtenção e limpeza de dados',
      description: 'I feel so unsure As I take your hand and lead you to the dance floor As the music dies, something in your eyes Calls to mind a silver screen And all its sad good-byes I m never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 -960 960 960',
        width: '6rem',
        height: '6rem',
        path:'M326.89-114.02v-80H142.15q-27.6 0-47.86-20.27-20.27-20.26-20.27-47.86v-515.7q0-27.7 20.27-48.03 20.26-20.34 47.86-20.34H500v68.37H142.15v515.7h675.7V-405.5h68.37v143.35q0 27.6-20.34 47.86-20.33 20.27-48.03 20.27h-184.5v80H326.89ZM680-416.63 492.09-604.78 536-648.7l112.57 112.81v-310.33h62.86v310.33L824-648.7l43.91 43.92L680-416.63Z'
      }
    },
    {
      slug: 'AutomacaoDeRotinas',
      class: 'auto-rot',
      text: 'automação de rotinas',
      description: 'I shouldve known better than to cheat a friend  And waste the chance that Id been given So Im never gonna dance again The way I danced with you, oh Time can never mend The careless whispers of a good friend To the heart and mind Ignorance is kind Theres no comfort in the truth Pain is all youll find',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 -960 960 960',
        width: '6rem',
        height: '6rem',
        path:'m122.76-234.74-48.74-48.74 298.94-297.69 167 167 231.91-232.4H647.02v-68.36h239.2v239.19h-67.37v-121.09L538.96-316.7l-167-167-249.2 248.96Z'
      }
    },
    {
      slug: 'AnaliseDeDados',
      class: 'analise-dd',
      text: 'análise de dados',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool I should ve known better than to cheat a friend (shouldve known better, yeah) And waste the chance that Id been given So Im never gonna dance again The way I danced with you, oh',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 -960 960 960',
        width: '6rem',
        height: '6rem',
        path:'M189-95q-39.05 0-66.53-27.47Q95-149.95 95-189v-582q0-39.46 27.47-67.23Q149.95-866 189-866h384v95H189v582h582v-384h95v384q0 39.05-27.77 66.53Q810.46-95 771-95H189Zm100-182h60v-275h-60v275Zm161 0h60v-406h-60v406Zm162 0h60v-148h-60v148Zm86.5-326v-95H603v-71h96v-97h71v97h96v71.5h-96v94.5h-71.5ZM480-480Z'
      }
    },
    {
      slug: 'DesenvolvimentoDePaineisGerenciais',
      class: 'desenvol-paper',
      text: 'desenvolvimento de painéis gerenciais',
      description: 'Never without your love Tonight the music seems so loud I wish that we could lose this crowd Maybe its better this way Wed hurt each other with the things wed want to say',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 65 65',
        width: '65',
        height: '65',
        path:'M48.7499 8.125H16.2499C14.095 8.125 12.0284 8.98102 10.5046 10.5048C8.9809 12.0285 8.12488 14.0951 8.12488 16.25V48.75C8.12488 50.9049 8.9809 52.9715 10.5046 54.4952C12.0284 56.019 14.095 56.875 16.2499 56.875H48.7499C50.9048 56.875 52.9714 56.019 54.4951 54.4952C56.0189 52.9715 56.8749 50.9049 56.8749 48.75V16.25C56.8749 14.0951 56.0189 12.0285 54.4951 10.5048C52.9714 8.98102 50.9048 8.125 48.7499 8.125ZM16.2499 13.5417H48.7499C49.4682 13.5417 50.157 13.827 50.665 14.3349C51.1729 14.8428 51.4582 15.5317 51.4582 16.25V38.8917L42.7915 31.4979C41.4487 30.393 39.7638 29.7889 38.0249 29.7889C36.2859 29.7889 34.601 30.393 33.2582 31.4979L13.5415 47.9375V16.25C13.5415 15.5317 13.8269 14.8428 14.3348 14.3349C14.8427 13.827 15.5316 13.5417 16.2499 13.5417Z'
      }
    },
    {
      slug: 'ApoioaContratacaoDeSistemas',
      class: 'apoio-sys',
      text: 'apoio à contratação de sistemas',
      description: 'Never without your love Tonight the music seems so loud I wish that we could lose this crowd Maybe its better this way Wed hurt each other with the things wed want to say',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 -960 960 960',
        width: '5rem',
        height: '5rem',
        path:'M598-92v-125H433v-432h-70v130H40v-350h323v125h235v-125h323v350H598v-130h-71v338h71v-130h323v349H598ZM134-774v160-160Zm559 427v161-161Zm0-427v160-160Zm0 160h133v-160H693v160Zm0 428h133v-161H693v161ZM134-614h135v-160H134v160Z'
      }
    },
    {
      slug: 'DesignDeInterfaces',
      class: 'design',
      text: 'design de interfaces',
      description: 'We could have been so good together We could have lived this dance forever But now, whos gonna dance with me? Please stay And Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 85 85',
        width: '6rem',
        height: '6rem',
        path:'M66.5 18H17.5C14.7152 18 12.0445 19.1062 10.0754 21.0754C8.10625 23.0445 7 25.7152 7 28.5V56.5C7 59.2848 8.10625 61.9555 10.0754 63.9246C12.0445 65.8938 14.7152 67 17.5 67H66.5C69.2848 67 71.9555 65.8938 73.9246 63.9246C75.8938 61.9555 77 59.2848 77 56.5V28.5C77 25.7152 75.8938 23.0445 73.9246 21.0754C71.9555 19.1062 69.2848 18 66.5 18ZM38.5 53H24.5C23.5717 53 22.6815 52.6312 22.0251 51.9749C21.3687 51.3185 21 50.4283 21 49.5C21 48.5717 21.3687 47.6815 22.0251 47.0251C22.6815 46.3687 23.5717 46 24.5 46H38.5C39.4283 46 40.3185 46.3687 40.9749 47.0251C41.6312 47.6815 42 48.5717 42 49.5C42 50.4283 41.6312 51.3185 40.9749 51.9749C40.3185 52.6312 39.4283 53 38.5 53ZM59.5 53H52.5C51.5717 53 50.6815 52.6312 50.0251 51.9749C49.3688 51.3185 49 50.4283 49 49.5C49 48.5717 49.3688 47.6815 50.0251 47.0251C50.6815 46.3687 51.5717 46 52.5 46H59.5C60.4283 46 61.3185 46.3687 61.9749 47.0251C62.6313 47.6815 63 48.5717 63 49.5C63 50.4283 62.6313 51.3185 61.9749 51.9749C61.3185 52.6312 60.4283 53 59.5 53ZM70 32H14V28.5C14 27.5717 14.3687 26.6815 15.0251 26.0251C15.6815 25.3687 16.5717 25 17.5 25H66.5C67.4283 25 68.3185 25.3687 68.9749 26.0251C69.6313 26.6815 70 27.5717 70 28.5V32Z'
      }
    },
    {
      slug: 'DesenvolvimentoWeb',
      class: 'developer-web',
      text: 'desenvolvimento web',
      description: 'I shouldve known better than to cheat a friend And waste the chance that Id been given So Im never gonna dance again The way I danced with you, oh now that youre gone (Now that youre gone) was what I did so wrong, so wrong That you had to leave me alone? - Careless Whisper',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 65 64',
        width: '5rem',
        height: '5rem',
        path:'M59.1657 31.9997C59.1657 28.4978 58.4759 25.0302 57.1358 21.7949C55.7957 18.5595 53.8314 15.6198 51.3552 13.1436C48.879 10.6673 45.9392 8.70309 42.7039 7.36296C39.4685 6.02284 36.0009 5.33308 32.499 5.33308C25.4266 5.33308 18.6438 8.1426 13.6428 13.1436C8.64185 18.1445 5.83234 24.9273 5.83234 31.9997C5.83234 39.0722 8.64185 45.855 13.6428 50.8559C18.6438 55.8569 25.4266 58.6664 32.499 58.6664C39.5714 58.6664 46.3542 55.8569 51.3552 50.8559C56.3562 45.855 59.1657 39.0722 59.1657 31.9997ZM53.6457 29.3331H45.8323C45.3925 23.0615 43.2437 17.03 39.619 11.8931C43.3429 13.2157 46.6263 15.5466 49.103 18.626C51.5797 21.7054 53.1524 25.4122 53.6457 29.3331ZM24.7123 34.6664H40.499C39.8166 41.2546 37.0085 47.4418 32.499 52.2931C27.9925 47.4621 25.2488 41.2512 24.7123 34.6664ZM24.7123 29.3331C25.3334 22.778 28.0659 16.6017 32.499 11.7331C37.0449 16.5494 39.8593 22.7412 40.499 29.3331H24.7123ZM25.6723 11.8131C22.0285 16.9785 19.8451 23.031 19.3523 29.3331H11.3523C11.8561 25.3637 13.466 21.6161 15.9981 18.5181C18.5303 15.4201 21.8826 13.0966 25.6723 11.8131ZM11.3523 34.6664H19.3523C19.7915 40.9631 21.96 47.0165 25.619 52.1597C21.8429 50.8699 18.5043 48.5469 15.9824 45.4546C13.4605 42.3623 11.8564 38.6247 11.3523 34.6664ZM39.4857 52.1331C43.1348 46.9882 45.3274 40.9538 45.8323 34.6664H53.699C53.1947 38.6137 51.5964 42.3413 49.0847 45.4279C46.573 48.5145 43.2481 50.837 39.4857 52.1331Z'
      }
    },
    
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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug && this.popupMapping[slug] !== undefined) {
        this.openPopup(slug);
      }
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
