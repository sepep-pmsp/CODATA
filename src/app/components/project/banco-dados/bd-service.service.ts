import { Injectable } from '@angular/core';
import { DataService } from '../../data-service.service';
import { BancoDeDados } from '../../data.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BdService {

  constructor(private dataService: DataService) {}

  getBancoDeDados(): Observable<BancoDeDados[]> {
    return this.dataService.getBancoDeDados();
  }

  buscarPorUrl(url: string): Observable<BancoDeDados | undefined> {
    return new Observable((observer) => {
      this.dataService.getBancoDeDados().subscribe((bancodedados) => {
        const bd = bancodedados.find(e => e.url === url);
        observer.next(bd);
        observer.complete();
      });
    });
  }
}
