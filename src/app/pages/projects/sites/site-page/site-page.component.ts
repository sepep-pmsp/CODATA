import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../../../shared/models/site.model';

@Component({
    selector: 'app-site-page',
    templateUrl: './site-page.component.html',
    styleUrl: './site-page.component.scss'
})

export class SitePageComponent extends BasePageComponent<Site> implements AfterViewInit {
    site: Site | undefined;
    allSites: Site[] = [];
    nextVisible = false;
    nextProject: Site | undefined;
    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        super(contentService, activatedRoute, 'site');
    }

    override afterItemLoad(item: Site): void {
        this.site = item;
        this.contentService.getContent<Site>('site').subscribe((sites) => {
            this.allSites = sites;
        });
    }

    ngAfterViewInit(): void {
        const scrollContainer = document.querySelector('.page_system');
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', ((event: WheelEvent) => {
                event.preventDefault();
                (scrollContainer as HTMLElement).scrollLeft += event.deltaY;

                this.checkScrollEnd(scrollContainer as HTMLElement);
            }) as EventListener, { passive: false });

            scrollContainer.addEventListener('scroll', () => {
                this.checkScrollEnd(scrollContainer as HTMLElement);
            });
        }
    }
    checkScrollEnd(container: HTMLElement): void {
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

        if (isAtEnd && this.selectedItem) {
            const next = this.getNextProject(this.selectedItem.id);
            this.nextProject = next;
            this.nextVisible = !!next;
        } else {
            this.nextVisible = false;
        }
    }

    getNextProject(currentId: string): Site | undefined {
        const currentIndex = this.allSites.findIndex(p => p.id === currentId);
        return this.allSites[currentIndex + 1];
    }
}