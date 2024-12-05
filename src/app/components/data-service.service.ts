import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BancoDeDados, Dashboard, Estudos, Sistemas } from './data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getSistemas(): Observable<Sistemas[]> {
    return this.http.get<any>(this.dataUrl).pipe(map((data) => data.sistemas));
  }

  getEstudos(): Observable<Estudos[]> {
    return this.http.get<any>(this.dataUrl).pipe(map((data) => data.estudos));
  }

  getDashboard(): Observable<Dashboard[]> {
    return this.http.get<any>(this.dataUrl).pipe(map((data) => data.dashboard));
  }

  getBancoDeDados(): Observable<BancoDeDados[]> {
    return this.http.get<any>(this.dataUrl).pipe(map((data) => data.bancoDeDados));
  }

}
