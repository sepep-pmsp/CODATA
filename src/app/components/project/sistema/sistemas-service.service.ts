import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Sistemas } from './sistemas.model';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {
 private sistemasUrl = 'assets/json/sistemas.json';
  
  constructor(private http: HttpClient) {}

  getSistemas(): Observable<Sistemas[]> {
    return this.http.get<Sistemas[]>(this.sistemasUrl);
  }
  

  buscarPorUrl(url: string): Observable<Sistemas | undefined> {
    return new Observable((observer) => {
      this.getSistemas().subscribe((sistemas: Sistemas[]) => {
        const sistema = sistemas.find((s: Sistemas) => s.url === url);
        observer.next(sistema);
        observer.complete();
      });
    });
  }
}