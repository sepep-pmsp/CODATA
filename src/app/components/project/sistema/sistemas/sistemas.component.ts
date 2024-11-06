import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SistemasService } from '../sistemas-service.service';
import { Sistemas } from '../../../data.model';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.scss'
})
export class SistemasComponent implements OnInit {
  sistemas: Sistemas[] = [];
  sistema: Sistemas | undefined;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private sistemasService: SistemasService
    ) {}
  
    ngOnInit(): void {
      this.sistemasService.getSistemas().subscribe((sistemas) => {
        this.sistemas = sistemas;
      });
  
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.sistemasService.buscarPorUrl(String(id)).subscribe((sistema) => {
          this.sistema = sistema;
        });
      }
    }
}
