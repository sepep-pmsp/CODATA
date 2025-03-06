import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudosService } from '../estudos-service.service';
import { Estudos } from '../estudos.model';


@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrl: './estudos.component.scss'
})
export class EstudosComponent implements OnInit {
  estudos: Estudos[] = [];
  estud: Estudos | undefined;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private estudosService: EstudosService
    ) {}
  
    ngOnInit(): void {
      this.estudosService.getEstudos().subscribe((estudos) => {
        this.estudos = estudos;
      });
  
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.estudosService.buscarPorUrl(String(id)).subscribe((estud) => {
          this.estud = estud;
        });
      }
    }
}
