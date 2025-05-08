import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchInputComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    SearchInputComponent,
    MenuListComponent
  ]
})
export class SharedModule { }
