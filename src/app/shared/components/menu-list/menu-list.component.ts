import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrl: './menu-list.component.scss'
})
export class MenuListComponent{
    @Input() dropdownState: any = {};
    @Output() navigate = new EventEmitter<string>();

    toggleSubmenu(menu: 'projetos' | 'institucional'): void {
        this.dropdownState[menu] = !this.dropdownState[menu];
    }
}
