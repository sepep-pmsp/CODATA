import { Component } from '@angular/core';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Estudos } from '../../../../shared/models/estudos.model';

@Component({
    selector: 'app-estudos-page',
    templateUrl: './estudos-page.component.html',
    styleUrl: './estudos-page.component.scss'
})
export class EstudosPageComponent extends BasePageComponent<Estudos> {
    override afterItemLoad(item: Estudos): void {
        this.estudo = item;
        if (item.slides) {
            this.slides = item.slides;
            this.updateVisibleThumbnails();
        }
    }
    options: string[] = [];
    selectedEstudos: any;
    tooltipVisible: boolean = false;
    estudo: Estudos | undefined;
    safeestudosdUrl: SafeResourceUrl | undefined;
    isPopupOpen = false;
    currentSlide: number = 0;
    activeThumbnail: number = 0;
    visibleSlides: { image: string; caption: string }[] = [];
    thumbnailStartIndex: number = 0;
    thumbnailLimit: number = 4;


    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'estudos');
    }


    slides: { image: string; caption: string }[] = [];

    nextSlide() {
        const totalSlides = this.slides.length;
        this.activeThumbnail = this.currentSlide;
        this.currentSlide = (this.currentSlide + 1) % totalSlides;
        if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
            this.thumbnailStartIndex++;
        }

        this.updateVisibleThumbnails();
    }

    setSlide(index: number) {
        this.activeThumbnail = index;
        this.currentSlide = index;
        if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
            this.thumbnailStartIndex = this.currentSlide - this.thumbnailLimit + 1;
        } else if (this.currentSlide < this.thumbnailStartIndex) {
            this.thumbnailStartIndex = this.currentSlide;
        }
        this.updateVisibleThumbnails();
    }

    updateVisibleThumbnails() {
        this.visibleSlides = this.slides.slice(
            this.thumbnailStartIndex,
            this.thumbnailStartIndex + this.thumbnailLimit
        );
    }
}