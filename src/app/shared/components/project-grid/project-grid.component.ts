import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-grid',
    templateUrl: './project-grid.component.html',
    styleUrl: './project-grid.component.scss'
})
export class ProjectGridComponent {
    @Input() projetos: any[] = [];

    getProjectLink(projeto: any): string[] {
        switch (projeto.type) {
            case 'dashboard': return ['/dashboard/page', projeto.url];
            case 'banco_de_dados': return ['/banco_de_dados/info', projeto.url];
            case 'estudos': return ['/estudo/article', projeto.url];
            case 'API': return ['/api/detalhes', projeto.url];
            default: return ['/sistemas/detalhes', projeto.url];
        }
    }
}
