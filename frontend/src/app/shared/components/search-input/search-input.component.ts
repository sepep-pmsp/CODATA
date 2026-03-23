import { Component } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { Router } from '@angular/router';
import { JsonFiles } from '../../../core/constants/json-files.enum';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
    searchTerm: string = '';
    isSearching = false;

    constructor(private contentService: ContentService, private router: Router) { }

    onSearch(): void {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term) return;

        this.isSearching = true;

        const filesToSearch = [
            JsonFiles.Api,
            JsonFiles.Atividades,
            JsonFiles.BancoDeDados,
            JsonFiles.Dashboard,
            JsonFiles.Estudos,
            JsonFiles.Sistemas,
            JsonFiles.Sites,
            JsonFiles.Team,
        ];

        this.contentService.getMultipleJsonSearch<any>(filesToSearch).subscribe((results) => {
            for (let i = 0; i < results.length; i++) {
                const file = filesToSearch[i].replace('.json', '');
                const data = results[i];

                if (!Array.isArray(data)) {
                    console.warn(`O arquivo ${file}.json não retornou um array`);
                    continue;
                }

                for (const item of data) {
                    const campos = [
                        item.titulo,
                        item.title,
                        item.complete_name,
                        item.position,
                        item.description_position,
                        item.nome,
                        item.text,
                    ];

                    if (campos.some(campo => campo?.toLowerCase().includes(term))) {
                        this.redirectTo(item, file);
                        this.isSearching = false;
                        return;
                    }
                }
            }

            this.isSearching = false;
            alert('Nenhum resultado encontrado.');
        });
    }

    private redirectTo(item: any, file: string): void {
        const baseRoutes: Record<string, string> = {
            team: '/equipe',
            atividades: '/atribuicoes',
        };

        const statusToRouteMap: Record<string, string> = {
            'API': 'apis',
            'Dashboard': 'dashboard',
            'Banco de Dados': 'banco-dados',
            'sistema': 'sistemas',
            'Sistema': 'sistemas',
            'Estudos': 'estudos',
            'sites': 'sites',
            'Sites': 'sites',
            'Site': 'sites'
        };

        if (file === 'team') {
            this.router.navigate([baseRoutes['team']]);
            return;
        }

        if (file === 'atividades') {
            const slug = item.slug;
            if (slug) {
                this.router.navigate([baseRoutes['atividades'], slug]);
            } else {
                console.warn('Slug ausente para atribuição:', item);
            }
            return;
        }

        const status = item.status;
        const url = item.url;

        if (status && url) {
            const routeSegment = statusToRouteMap[status];
            if (routeSegment) {
                this.router.navigate(['/projetos', routeSegment, url]);
            } else {
                console.warn('Status de projeto não reconhecido:', status);
                alert('Não foi possível redirecionar para o projeto. Verifique o console.');
            }
            return;
        }

        console.warn('Item sem status ou url válido para projeto:', item);
        alert('Não foi possível redirecionar. Verifique o console.');
    }
}