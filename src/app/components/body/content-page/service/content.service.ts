import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destaques } from './destaques.model';
import { Partners } from './partners.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contents = 'assets/json/destaques.json';
  private partners = 'assets/json/partners.json';

  constructor(private http: HttpClient) { }

  getContents(): Observable<Destaques> {
    return this.http.get<Destaques>(this.contents);    
  }

  getPartners(): Observable<Partners[]> {
    return this.http.get<Partners[]>(this.partners);
  }
}