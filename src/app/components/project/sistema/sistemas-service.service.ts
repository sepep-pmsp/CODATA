import { Injectable } from '@angular/core';
import { Sistemas } from './sistemas.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {
  
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
    }
  ];

  constructor(private http: HttpClient) {}

  getSistemas(): Observable<Sistemas[]> {
    return of (this.sistemas);
  }

  buscarPorUrl(url: string): Observable<Sistemas | undefined> {
    const sistema = this.sistemas.find((sistema) => sistema.url === url);
    return of (sistema);
  }
}
