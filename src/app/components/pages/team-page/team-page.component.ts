import { Component, OnInit } from '@angular/core';
import { Team } from './service/team';
import { TeamService } from './service/team.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent  implements OnInit{
  team: Team[] = [];

  constructor(
    private teamService: TeamService
  ) {  }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((team) => {
      this.team = team;
    });
  }

  isPopupOpen = false; 
  selectedTeam: any = null;
  popupAnimationClass: string = '';

  openPopup(team: any): void {
    this.selectedTeam = team; 
    this.popupAnimationClass = 'slide-top'; 
    this.isPopupOpen = true; 
  }

  closePopup(): void {
    this.popupAnimationClass = 'slide-bottom';
    setTimeout(() => {
      this.isPopupOpen = false;
    }, 500); 
  }
  team_description=[
    {
      title: 'CODATA é a coordenadoria de análise de dados da Prefeitura de São Paulo.', 
      txt_0: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.', 
      txt_1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.', 
      txt_2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur, non ut voluptatum ab dolor at minima dicta amet itaque delectus quasi iure ducimus autem dignissimos odio! Sapiente.',
      txt_3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam sit tenetur.',
    }
  ];
}