import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';
import { JsonFiles } from '../../../core/constants/json-files.enum';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit {
    form_selection = [
        { className: 'form-proj-option', value: 'all', txtName: 'tudo' },
        { className: 'form-proj-option', value: 'API', txtName: 'API' },
        //{ className: 'form-proj-option', value: 'Banco De Dados', txtName: 'banco de dados' },
        { className: 'form-proj-option', value: 'Dashboard', txtName: 'dashboard' },
        //{ className: 'form-proj-option', value: 'Estudos', txtName: 'estudos' },
        { className: 'form-proj-option', value: 'Sistemas', txtName: 'sistemas' },
        { className: 'form-proj-option', value: 'Sites', txtName: 'sites' },
    ];

    selected: string = 'all';
    isDropdownOpen = false;
    projetos: any[] = [];
    displayedProjects: any[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 9;
    totalPages: number = 1;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private contentService: ContentService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const filter = params.get('filter');
            this.selected = filter ?? 'all';
            this.updateDisplayedProjects();
        });
        this.loadAllProjects();
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras?.state?.['fromNavbar']) {
            this.navigateToPage(this.route.snapshot.paramMap.get('filter') || 'all');
        }
    }

    loadAllProjects(): void {
        const paths = [
            JsonFiles.Api,
            JsonFiles.Dashboard,
            JsonFiles.Sistemas,
            JsonFiles.Sites,
        ];

        forkJoin(paths.map(file => this.contentService.getJson<any[]>(file)))
            .subscribe((dataArrays) => {
                this.projetos = dataArrays.flat();
                this.totalPages = Math.ceil(this.projetos.length / this.itemsPerPage);
                this.updateDisplayedProjects();
            });
    }

    onOpen(): void {
        this.isDropdownOpen = true;
    }

    onClose(): void {
        this.isDropdownOpen = false;
    }

    navigateToPage(filter: string): void {
        this.selected = filter;
        this.router.navigate([`/projetos/${filter}`]);
    }

    updateDisplayedProjects(): void {
        let filtered = this.selected === 'all'
            ? this.projetos
            : this.projetos.filter(p => p.type?.toLowerCase() === this.selected.toLowerCase());

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.displayedProjects = filtered.slice(startIndex, endIndex);
    }

    goToPage(page: number): void {
        this.currentPage = page;
        this.updateDisplayedProjects();
    }
}
