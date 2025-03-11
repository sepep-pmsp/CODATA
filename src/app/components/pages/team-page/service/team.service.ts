import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'assets/json/team.json';

  constructor(private http: HttpClient) { }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team []>(this.teamsUrl);
  }
}
