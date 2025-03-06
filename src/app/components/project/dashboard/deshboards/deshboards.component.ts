import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard-service.service';
import { Dashboard } from '../dashboard.model';

@Component({
  selector: 'app-deshboards',
  templateUrl: './deshboards.component.html',
  styleUrl: './deshboards.component.scss'
})
export class DeshboardsComponent implements OnInit{
  dashboards: Dashboard[] = [];
  sistema: Dashboard | undefined;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private dashboardsService: DashboardService
    ) {}
  
    ngOnInit(): void {
      this.dashboardsService.getDashboard().subscribe((dashboards) => {
        this.dashboards = dashboards;
      });
  
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.dashboardsService.buscarPorUrl(String(id)).subscribe((sistema) => {
          this.sistema = sistema;
        });
      }
    }

    dashboard_image = [
      {class:'img_dash00', img_class:'image00', backgroundColor: '#232323', img:'assets/images/grafic.svg', repeat: 2,},
      {class:'img_dash01', img_class:'image01', backgroundColor: '#CACACA', img:'assets/images/grafic.svg', repeat: 4,},
      {class:'img_dash02', img_class:'image02', backgroundColor: '#000000', img:'assets/images/grafic.svg', repeat: 1,},
    ]
}
