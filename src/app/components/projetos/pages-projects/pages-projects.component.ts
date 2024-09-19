import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto.model';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../projeto.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pages-projects',
  templateUrl: './pages-projects.component.html',
  styleUrl: './pages-projects.component.scss'
})
export class PagesProjectsComponent {
  projeto: Projeto | undefined;
  safeIframeUrl: SafeResourceUrl | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projetoService: ProjetoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.projetoService.buscarPorId(parseInt(id)).subscribe((projeto) => {
        this.projeto = projeto;
        if (projeto?.linkPage) {
          this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(projeto.linkPage);
        }
      });
    }
  }
  
  formatDescription(description: string): string {
    return description.replace(/\n/g, '<br>');
  }

}
