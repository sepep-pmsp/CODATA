import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit{
  selected: string = 'all';

  constructor(
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const filter = params.get('filter');
      this.selected = filter ? filter : 'all';
    });
  }

  navigateToPage(filter: string) {
    this.selected = filter;
    this.router.navigate([`/projetos/${filter}`]); 
  }
}
