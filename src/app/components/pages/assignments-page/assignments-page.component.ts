import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data-service.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrl: './assignments-page.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate(
          '0.5s ease-in',
          style({ transform: 'translateX(0)', opacity: 1 })
        )
      ])
    ])
  ]
})
export class AssignmentsPageComponent {
  atividades: any[] = [];
  activePopup: any = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.dataService.getAtividades().subscribe((data) => {
      this.atividades = data;
      const slug = this.route.snapshot.queryParamMap.get('slug');
      if (slug) {
        this.openPopupBySlug(slug);
      }
    });
  }
  openPopup(atividade: any): void {
    this.activePopup = atividade;
  }
  closePopup(): void {
    this.activePopup = null;
  }
  openPopupBySlug(slug: string): void {
    const atividade = this.atividades.find((item) => item.slug === slug);
    if (atividade) {
      this.openPopup(atividade);
    }
  }
}
