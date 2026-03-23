import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { JsonFiles } from '../../core/constants/json-files.enum';
import { DestaquesData } from '../../shared/models/destaquesData.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    openedPopupSlug: string | null = null;
    bigContents: any[] = [];
    smallContents: any[] = [];
    atividades: any[] = [];
    partners: any[] = [];

    constructor(
        private router: Router,
        private contentService: ContentService
    ) { }

    ngOnInit(): void {
        this.loadHomeContent();
    }
    loadHomeContent(): void {
        this.contentService.getJson<DestaquesData>(JsonFiles.Destaques).subscribe((data) => {
            this.bigContents = data.bigContents;
            this.smallContents = data.smallContents;
        });

        this.contentService.getJson<any[]>(JsonFiles.Atividades).subscribe((data) => {
            this.atividades = data;
        });

        this.contentService.getJson<any[]>(JsonFiles.Partners).subscribe((data) => {
            this.partners = data;
        });
    }


    openPopup(slug: string) {
        this.openedPopupSlug = slug;
        this.router.navigate(['/pop-up', slug]);

        setTimeout(() => {
            this.scrollToPopup();
        }, 0);
    }

    closePopup() {
        const scrollY = window.scrollY;
        this.openedPopupSlug = null;

        this.router.navigate(['/']).then(() => {
            window.scrollTo(0, scrollY);
        });
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

    isPopupOpen(slug: string): boolean {
        return this.openedPopupSlug === slug;
    }
}
