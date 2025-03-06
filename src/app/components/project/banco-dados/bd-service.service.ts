import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BancoDeDados } from './bancoDeDados.model';


@Injectable({
  providedIn: 'root'
})

export class BdService {
  private bdUrl = 'assets/json/bancoDeDados.json';

  constructor(private http: HttpClient) { }

  getBancoDeDados(): Observable<BancoDeDados[]> {
      return this.http.get<BancoDeDados[]>(this.bdUrl);
  }

  buscarPorUrl(url: string): Observable<BancoDeDados | undefined> {
    return new Observable((observer) => {
      this.getBancoDeDados().subscribe((bd: BancoDeDados[]) => {
        const sistema = bd.find((s: BancoDeDados) => s.url === url);
        observer.next(sistema);
        observer.complete();
      });
    });
  }
}
