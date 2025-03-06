import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Atividades } from './assignments.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private atividadesUrl = 'assets/json/atividades.json';
    
    constructor(private http: HttpClient) {}
  
    getAtividades(): Observable<Atividades[]> {
        return this.http.get<Atividades[]>(this.atividadesUrl);
      }
  
    buscarPorUrl(url: string): Observable<Atividades | undefined> {
      return new Observable((observer) => {
        this.getAtividades().subscribe((atividades: Atividades[]) => {
          const sistema = atividades.find((s: Atividades) => s.url === url);
          observer.next(sistema);
          observer.complete();
        });
      });
    }
}
