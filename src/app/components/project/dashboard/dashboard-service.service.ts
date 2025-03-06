import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dashboardUrl = 'assets/json/dashboard.json';

  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.dashboardUrl);
  }

  buscarPorUrl(url: string): Observable<Dashboard | undefined> {
    return new Observable((observer) => {
      this.getDashboard().subscribe((dashboard: Dashboard[]) => {
        const sistema = dashboard.find((s: Dashboard) => s.url === url);
        observer.next(sistema);
        observer.complete();
      });
    });
  }
}
