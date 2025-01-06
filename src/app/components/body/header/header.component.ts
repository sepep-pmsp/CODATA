import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLogoHidden = false;
  isSearchVisible = false;
  isMenuOpen = false; 
  dropdownState = {
    projetos: false,
    institucional: false
  };

  toggleLogo(event: any): void {
    const isChecked = event.target.checked;
    this.isLogoHidden = isChecked;
    this.isSearchVisible = isChecked;
    this.updateBodyBackground(isChecked);
    this.updateHeaderHighlight(isChecked);
    this.isMenuOpen = isChecked;
  }

  updateBodyBackground(isMenuOpen: boolean): void {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  updateHeaderHighlight(isMenuOpen: boolean): void {
    const headerRow = document.querySelector('.header--row');
    if (headerRow) {
      if (isMenuOpen) {
        headerRow.classList.add('menu-highlight');
      } else {
        headerRow.classList.remove('menu-highlight');
      }
    }
  }
  toggleSubmenu(menu: 'projetos' | 'institucional'): void {
    this.dropdownState[menu] = !this.dropdownState[menu];
  }

  selected: string = 'all'; 
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const filter = params.get('filter');
      this.selected = filter ? filter : 'all';
    });
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }

  navigateToPage(filter: string) {
    this.selected = filter; 
    this.isMenuOpen = false; 
    this.router.navigate([`/projetos/${filter}`]);
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.isLogoHidden = false;
    this.isSearchVisible = false;
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    this.updateBodyBackground(false);
    this.updateHeaderHighlight(false);
  }
}