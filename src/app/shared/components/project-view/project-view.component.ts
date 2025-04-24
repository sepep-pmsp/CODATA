import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
    @Input() selected: string = '';
    @Input() displayedProjects: any[] = [];
    @Input() isDropdownOpen: boolean = false;
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Input() goToPage!: (page: number) => void;
}
