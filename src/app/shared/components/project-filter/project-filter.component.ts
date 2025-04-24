import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-project-filter',
    templateUrl: './project-filter.component.html',
    styleUrl: './project-filter.component.scss'
})
export class ProjectFilterComponent {
    @Input() formSelection: any[] = [];
    @Input() selected!: string;
    @Output() onChange = new EventEmitter<string>();
    @Output() onOpen = new EventEmitter<void>();
    @Output() onClose = new EventEmitter<void>();

}
