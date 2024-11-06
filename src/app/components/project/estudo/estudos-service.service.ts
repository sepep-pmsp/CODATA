import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data-service.service';
import { Estudos } from '../../data.model';

@Injectable({
  providedIn: 'root'
})
export class EstudosService {
  
  constructor(private dataService: DataService) {}

  getEstudos(): Observable<Estudos[]> {
    return this.dataService.getEstudos();
  }

  buscarPorUrl(url: string): Observable<Estudos | undefined> {
    return new Observable((observer) => {
      this.dataService.getEstudos().subscribe((estudos) => {
        const estudo = estudos.find(e => e.url === url);
        observer.next(estudo);
        observer.complete();
      });
    });
  }
}
