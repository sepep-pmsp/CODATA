import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../data-service.service';
import { Sistemas } from '../../data.model';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {
  
  constructor(private dataService: DataService) {}

  getSistemas(): Observable<Sistemas[]> {
    return this.dataService.getSistemas();
  }

  buscarPorUrl(url: string): Observable<Sistemas | undefined> {
    return new Observable((observer) => {
      this.dataService.getSistemas().subscribe((sistemas) => {
        const sistema = sistemas.find(s => s.url === url);
        observer.next(sistema);
        observer.complete();
      });
    });
  }
}
