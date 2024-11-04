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
    },
    {
      id:'01',
      url:'teste01',
      title:'ObervaSampa',
      description: 'O Observatório de Indicadores da Cidade de São Paulo é uma política pública de Estado que tem por objetivo apresentar dados, sobre a cidade de São Paulo.',
      svg:'assets/images/observa.svg',
      status: 'sistema',
      linkPage:'teste',
    },
    {
      id:'02',
      url:'teste02',
      title:'+Info',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/info.svg',
      status: 'sistema',
      linkPage:'teste',
    },
    {
      id:'03',
      url:'teste03',
      title:'Planos Municipais',
      description: 'Os Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo',
      svg:'assets/images/logo_planos.png',
      status: 'sistema',
      linkPage:'teste',
    },
    {
      id:'04',
      url:'teste04',
      title:'Site SMAE',
      description: 'O SMAE é um software livre que foi desenvolvido com o objetivo de promover melhores práticas na gestão da informação.',
      svg:'assets/images/site_smae.png',
      status: 'sistema',
      linkPage:'teste',
    },
    {
      id:'05',
      url:'teste05',
      title:'Hydra',
      description: 'Im never gonna dance again Guilty feet have got no rhythm Though its easy to pretend I know youre not a fool',
      svg:'assets/images/hydra.png',
      status: 'sistema',
      linkPage:'teste',
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
