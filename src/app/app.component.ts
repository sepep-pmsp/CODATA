import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CODATA';
  isContactPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isContactPage = this.router.url.includes('/contato');
    });
  }
}
