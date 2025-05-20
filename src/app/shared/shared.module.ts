import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RouterModule } from '@angular/router';
import { SearchMobileComponent } from './components/search-mobile/search-mobile.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';


@NgModule({
  declarations: [
    SearchInputComponent,
    MenuListComponent,
    SearchMobileComponent,
    CookieBannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
],
  exports: [
    SearchInputComponent,
    MenuListComponent,
    SearchMobileComponent,
    CookieBannerComponent
  ]
})
export class SharedModule { }
