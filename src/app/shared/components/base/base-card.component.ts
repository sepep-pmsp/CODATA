import { ActivatedRoute } from "@angular/router";
import { ContentService } from "../../../core/services/content.service";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
    selector: 'app-base-card',
    template: '',
})

export abstract class BaseCardComponent<T> implements OnInit {
    apis: T[] = [];
    api!: T;

    constructor(
        protected contentService: ContentService,
        protected activatedRoute: ActivatedRoute,
        @Inject(String) private tipo: string
    ) { }

    ngOnInit(): void {
        this.contentService.getContent<T>(this.tipo).subscribe((items) => {
            this.apis = items;
            this.calculateTotalPages();
            this.updateDisplayedProjects();
        });

        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.contentService.buscarPorUrl<T>(this.tipo, String(id)).subscribe((item) => {
                if (item !== undefined) {
                    this.api = item;
                } else {
                    throw new Error('Item not found');
                }
            });
        }
    }

    abstract calculateTotalPages(): void;
    abstract updateDisplayedProjects(): void;
}
