import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { BancoDeDados, Dashboard, Estudos, Sistemas } from '../../data.model';
import { DataService } from '../../data-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  constructor(private dataService: DataService) {}

  // Método para obter todos os projetos de todas as categorias
  getAllProjects(): Observable<(Sistemas | Estudos | Dashboard | BancoDeDados)[]> {
    return forkJoin([
      this.dataService.getSistemas(),
      this.dataService.getEstudos(),
      this.dataService.getDashboard(),
      this.dataService.getBancoDeDados()
    ]).pipe(
      map(([sistemas, estudos, dashboards, bancos]) => [
        ...sistemas,
        ...estudos,
        ...dashboards,
        ...bancos
      ])
    );
  }

  // Método para buscar um projeto por URL em todas as categorias
  buscarPorUrl(url: string): Observable<Sistemas | Estudos | Dashboard | BancoDeDados | undefined> {
    return this.getAllProjects().pipe(
      map((projects) => projects.find((project) => project.url === url))
    );
  }

  // Método para buscar um projeto por ID em todas as categorias
  buscarPorId(id: string): Observable<Sistemas | Estudos | Dashboard | BancoDeDados | undefined> {
    return this.getAllProjects().pipe(
      map((projects) => projects.find((project) => project.id === id))
    );
  }

  // Métodos individuais por categoria (opcional, caso você precise de dados separados)
  getSistemas(): Observable<Sistemas[]> {
    return this.dataService.getSistemas();
  }

  getEstudos(): Observable<Estudos[]> {
    return this.dataService.getEstudos();
  }

  getDashboard(): Observable<Dashboard[]> {
    return this.dataService.getDashboard();
  }

  getBancoDeDados(): Observable<BancoDeDados[]> {
    return this.dataService.getBancoDeDados();
  }
  
}
