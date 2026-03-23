import { Component } from '@angular/core';
import { Content } from '../../shared/models/content.model';
import { ContentService } from '../../core/services/content.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contact: Content[] = [];

    constructor(
        private contentService: ContentService
    ) { }

    ngOnInit(): void {
        this.contentService.getJson<Content[]>('contact.json').subscribe((contact) => {
            this.contact = contact as Content[];
        });
    }
}
