import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BancoDeDados, Dashboard, Estudos, Sistemas } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sistemas: Sistemas[] = [
    {
      id:'00',
      url:'agenda-2030',
      title:'Agenda 2030',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/ods.svg',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'01',
      url:'teste01',
      title:'ObervaSampa',
      description: 'O Observatório de Indicadores da Cidade de São Paulo é uma política pública de Estado que tem por objetivo apresentar dados, sobre a cidade de São Paulo.',
      svg:'assets/images/observa.svg',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'02',
      url:'teste02',
      title:'+Info',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/info.svg',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'03',
      url:'teste03',
      title:'Planos Municipais',
      description: 'Os Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo',
      svg:'assets/images/logo_planos.svg',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'04',
      url:'teste04',
      title:'Site SMAE',
      description: 'O SMAE é um software livre que foi desenvolvido com o objetivo de promover melhores práticas na gestão da informação.',
      svg:'assets/images/site_smae.png',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'05',
      url:'teste05',
      title:'Hydra',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/hydra.png',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    {
      id:'06',
      url:'teste06',
      title:'CODATA',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/codata.svg',
      status: 'sistema',
      linkPage:'teste',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Categoria', content: 'Lorem ipsum dolor sit' },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur aliquid voluptate temporibus reprehenderit! Omnis reprehenderit facere vero. Praesentium totam voluptates soluta delectus. Quia placeat tempora debitis eligendi.' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic voluptas aspernatur...' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      additionalLinks: [
        { label: 'GitHub', url: 'https://github.com/' },
        { label: 'Website', url: 'https://example.com/' }
      ]
    },
    
  ];

  private estudos: Estudos[] = [
    {
      id:'sfjshdfshdfs',
      url:'teste_de_estudos',
      title:'Teste de estudos',
      subtitle:'Teste de estudos',
      text:'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      dates: 2023,
      svg:'assets/images/info.svg',
      status: 'sistema',
      linkPage:'teste',
      quote:'Earum dolorem ea ipsum commodi ea autem consequuntur qui ratione neque qui molestiae eveniet non assumenda consequatur?',
      listContents: [
        { title: 'Título', content: 'Lorem ipsum dolor sit' },
        { title: 'Período', content: 'Lorem ipsum dolor sit' },
        { title: 'Parceiros', content: ['Parceiro 1\n'] },
        { title: 'Equipe', content: ['Membro 1\n'] }, 
        { title: 'Tecnologia', content: 'Lorem ipsum dolor sit' },
      ],
      sections: [
        { title: 'o que', paragraph: 'Lorem ipsum dolor sit amet' },
        { title: 'como', paragraph: 'Lorem ipsum dolor sit amet' },
        { title: 'quem', paragraph: 'Lorem ipsum dolor sit amet' },
        { title: 'por que', paragraph: 'Lorem ipsum dolor sit amet,' }
      ],
      additionalImages: [
        'assets/images/extra1.png',
        'assets/images/extra2.png'
      ],
      image:[
        {image_1:'https://picsum.photos/id/1043/800/450', 
          image_2:'https://picsum.photos/id/1043/800/450', 
          image_3:'https://picsum.photos/id/1043/800/450'
        }
      ],
      minitext: [
        { minitext_00: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.' },
        { minitext_00: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.' },
        { minitext_00: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.' },
        { minitext_00: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias consectetur veniam hic exercitationem! Facere aliquid, unde, ducimus accusantium iusto nulla repellendus odio aspernatur, dignissimos illum labore a. Deserunt, quaerat.' }
      ],
    },
  ];

  private dashboard: Dashboard[] = [
    {
      id:'dash00',
      url:'SEAD',
      title:'SEAD',
      subtitle:'Fundação Sistema Estadual de Análise de Dados',
      caption: 'Im never gonna dance again',
      text:'Im never gonna dance again...',
      img:'assets/images/grafic.svg',
      linkGitHub:'https://github.com/sepep-pmsp/parceria_sepep_seade',
      linkPage:'https://seade.sepep.prefeitura.sp.gov.br/',
      dashboard:'https://seade.sepep.prefeitura.sp.gov.br/',
      status: 'Dashboard',
    },
    {
      id:'dash01',
      url:'teste-dash-01',
      title:'SEAD teste 1',
      subtitle:'sead teste de img 0 ',
      caption: 'Im never gonna dance again',
      text:'Im never gonna dance again...',
      img:'assets/images/grafic.svg',
      linkPage:'https://seade.sepep.prefeitura.sp.gov.br/',
      dashboard:'https://app.powerbi.com/view?r=eyJrIjoiM2Y3MzhlYzMtMWM1Zi00NzliLWI4NjctN2E3YWU2YWY2MzkzIiwidCI6ImI5YjgwMjQ2LWYzMzgtNGRlZi04YzQ2LWY1MDhiZjY3YzU1ZSJ9',
      status: 'Dashboard',
    },
    {
      id:'dash02',
      url:'teste-dash-02',
      title:'SEAD teste 2',
      subtitle:'sead teste de img 1',
      caption: 'Im never gonna dance again',
      text:'Im never gonna dance again...',
      img:'assets/images/grafic.svg',
      linkPage:'https://seade.sepep.prefeitura.sp.gov.br/',
      dashboard:'https://app.powerbi.com/view?r=eyJrIjoiM2Y3MzhlYzMtMWM1Zi00NzliLWI4NjctN2E3YWU2YWY2MzkzIiwidCI6ImI5YjgwMjQ2LWYzMzgtNGRlZi04YzQ2LWY1MDhiZjY3YzU1ZSJ9',
      status: 'Dashboard',
    }
  ];

  private bancoDeDados: BancoDeDados[] = [
    {
      id:'02',
      url:'teste02',
      title: 'teste02',
      text: 'teste02',
      img: 'teste02',
      listLink: [
        { title: 'Título', link: 'Lorem ipsum dolor sit' },
      ],
      font: 'teste02',
      license: 'teste02',
      field: 'teste02',
      author: 'teste02',
      version: 'teste02',
      lastupdate: 'teste02',
      creationdate: 'teste02',
      identification: 'teste02',
      distribution: 'teste02',
      quality: 'teste02',
      refsystem: 'teste02',
      metadata: 'teste02',
    }
  ];

  getSistemas(): Observable<Sistemas[]> {
    return of(this.sistemas);
  }

  getEstudos(): Observable<Estudos[]> {
    return of(this.estudos);
  }

  getDashboard(): Observable<Dashboard[]> {
    return of(this.dashboard);
  }

  getBancoDeDados(): Observable<BancoDeDados[]> {
    return of(this.bancoDeDados);
  }

}
