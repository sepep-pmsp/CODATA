import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';
import { Sistemas } from '../../../../shared/models/sistemas.model';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';

@Component({
    selector: 'app-sistemas-page',
    templateUrl: './sistemas-page.component.html',
    styleUrl: './sistemas-page.component.scss'
})
export class SistemasPageComponent extends BasePageComponent<Sistemas> {
    sistema: Sistemas | undefined;
    imagemAtual: number = 0;
    fade: boolean = true;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'sistemas');
    }

    override afterItemLoad(item: Sistemas): void {
        this.sistema = item;
    }

    getLinkForLabel(label: string) {
        return this.sistema?.additionalLinks?.find(link => link.label.toLowerCase() === label.toLowerCase());
    }
    
    avancarImagem() {
        if (this.sistema?.additionalImages && this.imagemAtual < this.sistema.additionalImages.length - 1) {
            this.fade = false;
            setTimeout(() => {
                this.imagemAtual++;
                this.fade = true;
            }, 500); // Tempo da transição
        }
    }

    voltarImagem() {
        if (this.imagemAtual > 0) {
            this.fade = false;
            setTimeout(() => {
                this.imagemAtual--;
                this.fade = true;
            }, 500); // Tempo da transição
        }
    }

    onImageLoad() {
        this.fade = true;
    }
}