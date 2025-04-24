import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';
import { BasePageComponent } from '../../../../shared/components/base/base-page.component';
import { BancoDeDados } from '../../../../shared/models/bancoDeDados.model';

@Component({
    selector: 'app-banco-dados-page',
    templateUrl: './banco-dados-page.component.html',
    styleUrl: './banco-dados-page.component.scss'
})
export class BancoDadosPageComponent extends BasePageComponent<BancoDeDados> {
    override afterItemLoad(item: BancoDeDados): void {
        this.selectedBancoDeDados = item;
        this.options = item.optionsConfig?.options || [];
        if (this.options.length > 0) {
            this.selectedOption = this.options[0];
        }
    }
    
    options: string[] = [];
    selectedApi: any;
    tooltipVisible: boolean = false;
    selectedBancoDeDados: any;
    selectedOption: string = '';
    activeAnimation: { [key: string]: string } = {};
    boxAnimationClass: string = '';

    constructor(
        contentService: ContentService,
        activatedRoute: ActivatedRoute
    ) {
        super(contentService, activatedRoute, 'bancoDeDados');
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

    isString(content: any): content is string {
        return typeof content === 'string';
    }

    isArray(content: any): content is string[] {
        return Array.isArray(content);
    }

    isMixedContent(content: any): content is { text: string; list: string[] } {
        return content && typeof content.text === 'string' && Array.isArray(content.list);
    }

    get processedContent(): string | string[] | { text: string; list: string[] } | null {
        const content = this.selectedBancoDeDados?.optionsConfig?.contentMapping?.[this.selectedOption]?.data;
        if (typeof content === 'string') {
            return this.formatContent(content);
        }
        return content || null;
    }
    formatContent(content: string | undefined | null): string {
        if (!content) return '';
        return content.replace(/\n/g, '<br>');
    }
    selectOption(option: string, direction: 'left' | 'right'): void {
        if (option === this.selectedOption) return;
        this.activeAnimation = { [option]: direction === 'left' ? 'slide-left' : 'slide-right' };
        setTimeout(() => {
            this.selectedOption = option;
            this.boxAnimationClass = 'flip-vertical-left';
            this.activeAnimation = {};
        }, 500);

        setTimeout(() => {
            this.boxAnimationClass = '';
        }, 1000);
    }
}
