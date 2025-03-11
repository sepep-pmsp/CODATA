import { Component, OnInit } from '@angular/core';
import { Api } from '../api.model';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.scss'
})
export class ApiPageComponent implements OnInit{
  api: Api[] = [];
  safeApiUrl: SafeResourceUrl | undefined;
  selectedOption: string = '';
  options: string[] = [];
  selectedApi: any;
  tooltipVisible: boolean = false;

  constructor(
    private apisService: ApisService
  ) {}

  ngOnInit(): void {
    this.apisService.getApi().subscribe((apis) => {
      console.log('Dados recebidos da API:', apis);
  
      if (apis && apis.length > 0) {
        this.selectedApi = apis[0];
        console.log('selectedApi:', this.selectedApi);
  
        if (!this.selectedApi.urls || this.selectedApi.urls.length === 0) {
        }
  
        const optionsConfig = this.selectedApi?.optionsConfig;
        if (optionsConfig) {
          this.options = optionsConfig.options;
        }
      } else {
        console.warn('Nenhum dado recebido da API.');
      }
    },
    (error) => {
      console.error('Erro ao buscar API:', error);
    });
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
}
