import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { SistemasService } from '../sistema/sistemas-service.service';
import { BdService } from '../banco-dados/bd-service.service';
import { DashboardService } from '../dashboard/dashboard-service.service';
import { EstudosService } from '../estudo/estudos-service.service';
import { Sistemas } from '../sistema/sistemas.model';
import { Estudos } from '../estudo/estudos.model';
import { Dashboard } from '../dashboard/dashboard.model';
import { BancoDeDados } from '../banco-dados/bancoDeDados.model';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  constructor(
    private sistemasService: SistemasService,
    private estudosService: EstudosService,
    private dashboardService: DashboardService,
    private bdService: BdService
  ) {}

  // Método para obter todos os projetos de todas as categorias
  getAllProjects(): Observable<(Sistemas | Estudos | Dashboard | BancoDeDados)[]> {
    return forkJoin([
      this.sistemasService.getSistemas(),
      this.estudosService.getEstudos(),
      this.dashboardService.getDashboard(),
      this.bdService.getBancoDeDados()
    ]).pipe(
      map(([sistemas, estudos, dashboards, bancos]) => [
        ...sistemas,
        ...estudos,
        ...dashboards,
        ...bancos
      ])
    );
  }

  buscarPorUrl(url: string): Observable<Sistemas | Estudos | Dashboard | BancoDeDados | undefined> {
    return this.getAllProjects().pipe(
      map((projects) => projects.find((project) => project.url === url))
    );
  }

  buscarPorId(id: string): Observable<Sistemas | Estudos | Dashboard | BancoDeDados | undefined> {
    return this.getAllProjects().pipe(
      map((projects) => projects.find((project) => project.id === id))
    );
  }

  getSistemas(): Observable<Sistemas[]> {
    return this.sistemasService.getSistemas();
  }

  getEstudos(): Observable<Estudos[]> {
    return this.estudosService.getEstudos();
  }

  getDashboard(): Observable<Dashboard[]> {
    return this.dashboardService.getDashboard();
  }

  getBancoDeDados(): Observable<BancoDeDados[]> {
    return this.bdService.getBancoDeDados();
  }
  
}
