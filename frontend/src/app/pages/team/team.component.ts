import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { Team } from '../../shared/models/team.model';


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    team: Team[] = [];
    isPopupOpen = false;
    selectedTeam: Team | null = null;
    popupAnimationClass = '';

    team_description = [
        {
            title: 'CODATA é a coordenadoria de análise de dados da Prefeitura de São Paulo.',
            txt_0: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.',
            txt_1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.',
            txt_2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.',
            txt_3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur.',
        }
    ];

    constructor(private contentService: ContentService) { }

    ngOnInit(): void {
        this.loadTeam();
    }

    loadTeam(): void {
        this.contentService.getJson<Team[]>('team.json').subscribe({
            next: (data) => this.team = data,
            error: (err) => console.error('Erro ao carregar team.json:', err)
        });
    }

    openPopup(member: Team): void {
        this.selectedTeam = member;
        this.popupAnimationClass = 'slide-top';
        this.isPopupOpen = true;
    }

    closePopup(): void {
        this.popupAnimationClass = 'slide-bottom';
        setTimeout(() => {
            this.isPopupOpen = false;
            this.selectedTeam = null;
        }, 90);
    }
}