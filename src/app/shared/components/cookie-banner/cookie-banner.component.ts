import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { CookieData } from '../../models/cookies.model';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;
  content?: CookieData;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    const accepted = localStorage.getItem('cookiesAccepted');
    this.showBanner = !accepted;

    if (this.showBanner) {
      this.contentService.getContent<CookieData>('cookies').subscribe(data => {
        this.content = data[0];
      });
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner = false;
  }
}
