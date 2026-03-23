import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';

@Component({
    selector: 'app-atividade',
    templateUrl: './atividade.component.html',
    styleUrls: ['./atividade.component.scss'],
    animations: [
        trigger('slideIn', [
            transition(':enter', [
                style({ 
                    transform: '{{transformStart}}', 
                    opacity: 0 
                }),
                animate(
                    '0.5s ease-in',
                    style({ transform: '{{transformEnd}}', opacity: 1 })
                )
            ], { params: { transformStart: 'translateX(-100px)', transformEnd: 'translateX(0)' } })
        ])
    ]
})
export class AtividadeComponent {
    atividades: any[] = [];
    activePopup: any = null;
    transformStart: string = 'translateX(-100px)';
    transformEnd: string = 'translateX(0)';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private assignmentsService: ContentService
    ) {
        this.updateAnimationDirection();
    }

    ngOnInit(): void {
        this.assignmentsService.getJson<any[]>('atividades.json').subscribe((data) => {
            this.atividades = data as any[];
            const slug = this.route.snapshot.queryParamMap.get('slug');
            if (slug) {
                this.openPopupBySlug(slug);
            }
        });
    }

    @HostListener('window:resize')
    updateAnimationDirection(): void {
        if (window.innerWidth <= 768) {
            this.transformStart = 'translateY(-100px)';
            this.transformEnd = 'translateY(0)';
        } else {
            this.transformStart = 'translateX(-100px)';
            this.transformEnd = 'translateX(0)';
        }
    }

    openPopup(atividade: any): void {
        if (this.activePopup?.slug === atividade.slug) {
            this.closePopup();
        } else {
            this.activePopup = null;

            setTimeout(() => {
                this.activePopup = atividade;
                const queryParams = { slug: atividade.slug };
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams,
                    queryParamsHandling: 'merge',
                    replaceUrl: true
                });
            }, 0);
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