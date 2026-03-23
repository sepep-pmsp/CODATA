import { Component, Input } from '@angular/core';
import { JsonFiles } from '../../../../core/constants/json-files.enum';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../../core/services/content.service';

@Component({
    selector: 'app-destaques-section',
    templateUrl: './destaques-section.component.html',
    styleUrl: './destaques-section.component.scss'
})
export class DestaquesSectionComponent {
    @Input() Destaques: any[] = [];
    @Input() bigContents: any[] = [];
    @Input() smallContents: any[] = [];

}
