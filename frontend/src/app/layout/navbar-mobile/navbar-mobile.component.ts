import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar-mobile',
    templateUrl: './navbar-mobile.component.html',
    styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent implements OnInit{
    isLogoHidden = false;
    isLogoPrefeituraHidden= true;
    isSearchVisible = false;
    isMenuOpen = false;
    selected: string = 'all';
    dropdownState = {
        projetos: false,
        institucional: false
    };


    toggleLogo(event: any): void {
        const isChecked = event.target.checked;
        this.isLogoHidden = isChecked;
        this.isLogoPrefeituraHidden = !isChecked;
        this.isSearchVisible = isChecked;
        this.isMenuOpen = isChecked;
        this.updateBodyBackground(isChecked);
    }

    updateBodyBackground(isMenuOpen: boolean): void {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }

    navigateToPage(filter: string): void {
        this.selected = filter;
        this.isMenuOpen = false;
        this.router.navigate([`/projetos/${filter}`]);
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.isLogoHidden = false;
        this.isSearchVisible = false;
        this.isLogoPrefeituraHidden = true;
        const checkbox = document.getElementById('checkbox') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = false;
        }
        this.updateBodyBackground(false);
    }

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const filter = params.get('filter');
            this.selected = filter ? filter : 'all';
        });
        this.router.events.subscribe(() => {
            this.closeMenu();
        });
    }

}
