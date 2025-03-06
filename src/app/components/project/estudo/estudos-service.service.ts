import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudos } from './estudos.model';

@Injectable({
  providedIn: 'root'
})

export class EstudosService {
  private estudossUrl = 'assets/json/estudos.json';

  constructor(private http: HttpClient) { }

  getEstudos(): Observable<Estudos[]> {
    return this.http.get<Estudos[]>(this.estudossUrl);
  }
  
  buscarPorUrl(url: string): Observable<Estudos | undefined> {
    return new Observable((observer) => {
      this.getEstudos().subscribe((estudos: Estudos[]) => {
        const sistema = estudos.find((s: Estudos) => s.url === url);
        observer.next(sistema);
        observer.complete();
      });
    });
  }
}
