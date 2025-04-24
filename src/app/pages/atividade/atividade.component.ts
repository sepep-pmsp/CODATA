import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';

@Component({
    selector: 'app-atividade',
    templateUrl: './atividade.component.html',
    styleUrl: './atividade.component.scss',
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
export class AtividadeComponent {
    atividades: any[] = [];
    activePopup: any = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private assignmentsService: ContentService
    ) { }

    ngOnInit(): void {
        this.assignmentsService.getJson<any[]>('atividades.json').subscribe((data) => {
            this.atividades = data as any[];
            const slug = this.route.snapshot.queryParamMap.get('slug');
            if (slug) {
                this.openPopupBySlug(slug);
            }
        });
    };

    openPopup(atividade: any): void {
        if (this.activePopup?.slug === atividade.slug) {
            // Mesmo card: fecha
            this.closePopup();
        } else {
            // Fecha o anterior (zera), espera um microtempo e abre o novo
            this.activePopup = null;

            setTimeout(() => {
                this.activePopup = atividade;

                // Atualiza a URL com o novo slug
                const queryParams = { slug: atividade.slug };
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams,
                    queryParamsHandling: 'merge',
                    replaceUrl: true
                });
            }, 0); // Delay mínimo para garantir troca
        }
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
