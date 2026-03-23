import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Directive } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';

@Directive()
export abstract class BasePageComponent<T> implements OnInit {
    selectedItem!: T;

    constructor(
      protected contentService: ContentService,
      protected activatedRoute: ActivatedRoute,
      private tipo: string
    ) {}
  
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('url');
      if (id) {
        this.contentService.buscarPorUrl<T>(this.tipo, id).subscribe(
          (item) => {
            if (item !== undefined) {
              this.selectedItem = item;
              this.afterItemLoad(item);
            } else {
              console.error(`Item of type ${this.tipo} is undefined.`);
            }
          },
          (error) => {
            console.error(`Erro ao buscar dados do tipo ${this.tipo}:`, error);
          }
        );
      }
    }
  
    abstract afterItemLoad(item: T): void;
}