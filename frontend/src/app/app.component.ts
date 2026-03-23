import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'CODATA';
  isContactPage: boolean = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isContactPage = this.router.url.includes('/contato');
    });
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      }
    });
    this.checkIfMobile();
  }
}
