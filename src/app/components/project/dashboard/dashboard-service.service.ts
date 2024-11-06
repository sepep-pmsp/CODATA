import { Injectable } from '@angular/core';
import { DataService } from '../../data-service.service';
import { Dashboard } from '../../data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private dataService: DataService) {}

  getDashboards(): Observable<Dashboard[]> {
    return this.dataService.getDashboard();
  }

  buscarPorUrl(url: string): Observable<Dashboard | undefined> {
    return new Observable((observer) => {
      this.dataService.getDashboard().subscribe((dashboard) => {
        const dash = dashboard.find(e => e.url === url);
        observer.next(dash);
        observer.complete();
      });
    });
  }
}
