import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {
  openedPopupSlug: string | null = null;

  popupMapping: { [key: string]: number } = {
    'dados': 0,
    'limpeza': 1,
    'outro-slug': 2,
  };
  openedPopupIndex: null | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug && this.popupMapping[slug] !== undefined) {
        this.openPopup(slug);
      }
    });
  }

  openPopup(slug: string) {
    this.openedPopupSlug = slug;
    this.router.navigate(['/pop-up', slug]);
  }

  closePopup() {
    this.openedPopupSlug = null;
    this.router.navigate(['/']);
  }
  isPopupOpen(slug: string): boolean {
    return this.openedPopupSlug === slug;
  }

}
