import { Component } from '@angular/core';
import { BdService } from '../bd-service.service';
import { ActivatedRoute } from '@angular/router';
import { BancoDeDados } from '../bancoDeDados.model';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrl: './bd.component.scss'
})
export class BdComponent {
  BancoDeDados: BancoDeDados[] = [];
  sistema: BancoDeDados | undefined;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private BancoDeDadosService: BdService
    ) {}
  
    ngOnInit(): void {
      this.BancoDeDadosService.getBancoDeDados().subscribe((BancoDeDados) => {
        this.BancoDeDados = BancoDeDados;
      });
  
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.BancoDeDadosService.buscarPorUrl(String(id)).subscribe((sistema) => {
          this.sistema = sistema;
        });
      }
    }
}
