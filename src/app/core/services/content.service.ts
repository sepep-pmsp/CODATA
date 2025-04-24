import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ContentService {
    constructor(private http: HttpClient) { }

    getJson<T>(file: string): Observable<T> {
        const path = file.endsWith('.json') ? file : `${file}.json`;
        return this.http.get<T>(`assets/json/${path}`);
    }

    getMultipleJson<T>(paths: string[]): Observable<T[]> {
        return forkJoin(paths.map((path) => this.getJson<T>(path)));
    }

    getContent<T>(tipo: string): Observable<T[]> {
        return this.getJson<T[]>(`${tipo}.json`);
    }
    
    buscarPorUrl<T>(tipo: string, url: string): Observable<T | undefined> {
        return this.http.get<T[]>(`assets/json/${tipo}.json`).pipe(
            map((itens: T[]) => itens.find((item: any) => item.url === url))
        );
    }
}