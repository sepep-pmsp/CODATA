import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';
import { JsonFiles } from '../../../../core/constants/json-files.enum';

@Component({
    selector: 'app-atividade-popup',
    templateUrl: './atividade-popup.component.html',
    styleUrl: './atividade-popup.component.scss'
})
export class AtividadePopupComponent {
    @Input() atividades: any[] = [];
    @Output() openPopup = new EventEmitter<string>();
    @Output() closePopup = new EventEmitter<void>();


    openedPopupSlug: string | null = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private contentService: ContentService
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const slug = params['slug'];
            this.openedPopupSlug = slug || null;
            if (slug) {
                setTimeout(() => {
                    this.scrollToPopup();
                }, 0);
            } else {
                this.desbloquearRolagem();
            }
        });

        this.contentService.getJson<any[]>(JsonFiles.Atividades).subscribe(atividades => {
            this.atividades = atividades;
        });
    }

    handleClick(slug: string): void {
        if (this.openedPopupSlug === slug) {
            this.closePopupFn();
        } else {
            this.router.navigate(['/'], {
                relativeTo: this.route,
                queryParams: { slug },
                queryParamsHandling: 'merge',
            });
            this.openedPopupSlug = slug;
            this.bloquearRolagem();
            setTimeout(() => {
                this.scrollToPopup();
            }, 0);
        }
    }

    isPopupOpen(slug: string): boolean {
        return this.openedPopupSlug === slug;
    }

    closePopupFn(): void {
        const scrollY = window.scrollY;
        this.router.navigate(['/'], {
            relativeTo: this.route,
            queryParams: {},
        });
        this.openedPopupSlug = null;
        this.desbloquearRolagem();
        setTimeout(() => window.scrollTo(0, scrollY), 0);
    }

    scrollToPopup() {
        setTimeout(() => {
            const popup = document.querySelector('.pop-up');
            if (popup) {
                const popupPosition = popup.getBoundingClientRect().top + window.scrollY;
                const windowHeight = window.innerHeight;

                window.scrollTo({
                    top: popupPosition - windowHeight / 2 + popup.clientHeight / 2,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }

    navigateToAssignments(slug: string): void {
        this.router.navigate(['/atribuicoes'], { queryParams: { slug } });
    }

    bloquearRolagem(): void {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    desbloquearRolagem(): void {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    popupMapping: { [key: string]: number } = {
        'ObtencaoLimpezaDados': 0,
        'AutomacaoDeRotinas': 1,
        'AnaliseDeDados': 2,
        'DesenvolvimentoDePaineisGerenciais': 3,
        'ApoioaContratacaoDeSistemas': 4,
        'DesignDeInterfaces': 5,
        'DesenvolvimentoWeb': 6,
    };
}