import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private apiUrl = 'assets/json/api.json';

  constructor(private http: HttpClient) { }

  getApi(): Observable<Api[]>{
    return this.http.get<Api[]>(this.apiUrl);
  }

  buscarPorUrl(url: string): Observable<Api | undefined>{
    return new Observable((observer) => {
      this.getApi().subscribe((apis: Api[]) => {
        const api = apis.find((a: Api) => a.url === url);
        observer.next(api);
        observer.complete();
      });
    });
  }
}
