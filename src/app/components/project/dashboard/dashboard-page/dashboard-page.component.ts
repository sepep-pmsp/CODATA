import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../../data.model';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  dashboard: Dashboard | undefined;
  safeDashboardUrl: SafeResourceUrl | undefined;
  isPopupOpen = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('url');
    if (url) {
      this.dashboardService.buscarPorUrl(url).subscribe((dashboard) => {
        this.dashboard = dashboard;
        if (dashboard?.dashboard) {
          this.safeDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dashboard.dashboard);
        }
      });
    }
  }

  togglePopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }
}