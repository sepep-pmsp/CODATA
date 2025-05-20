import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../../../core/services/content.service';
import { Api } from '../../../../shared/models/api.model';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';

@Component({
    selector: 'app-api-page',
    templateUrl: './api-page.component.html',
    styleUrl: './api-page.component.scss'
})
export class ApiPageComponent extends BasePageComponent<Api> {
    override afterItemLoad(item: Api): void {
        this.selectedApi = item;
    }
    options: string[] = [];
    selectedApi: any;
    tooltipVisible: boolean = false;

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'api');
    }

    copyToClipboard(url: string): void {
        navigator.clipboard.writeText(url).then(() => {
            this.tooltipVisible = true;
            setTimeout(() => {
                this.tooltipVisible = false;
            }, 1500);
        }).catch(err => console.error('Erro ao copiar:', err));
    }

    downloadManual(): void {
        const urls = 'assets/manual.pdf';
        const link = document.createElement('a');
        link.href = urls;
        link.setAttribute('download', 'manual.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    toggleAccordion(func: any): void {
        func.open = !func.open;
    }
}
