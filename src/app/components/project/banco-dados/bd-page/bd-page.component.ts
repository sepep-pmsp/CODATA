import { Component, OnInit } from '@angular/core';
import { BdService } from '../bd-service.service';

@Component({
  selector: 'app-bd-page',
  templateUrl: './bd-page.component.html',
  styleUrls: ['./bd-page.component.scss'],
})

export class BdPageComponent implements OnInit {
  selectedBancoDeDados: any;
  options: string[] = [];
  selectedOption: string = '';
  activeAnimation: { [key: string]: string } = {};
  boxAnimationClass: string = '';

  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.bdService.getBancoDeDados().subscribe((bancoDeDados) => {
      this.selectedBancoDeDados = bancoDeDados[0];
      const optionsConfig = this.selectedBancoDeDados?.optionsConfig;
      if (optionsConfig) {
        this.options = optionsConfig.options;
      }
    });
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