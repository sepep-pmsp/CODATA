import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
}
