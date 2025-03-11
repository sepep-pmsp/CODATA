import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit{
  form_selection = [
    {
      className:'form-proj-option',
      value: 'all',
      txtName :'tudo',
    },
    {
      className:'form-proj-option',
      value: 'sistemas',
      txtName :'sistemas',
    },
    {
      className:'form-proj-option',
      value: 'dashboard',
      txtName :'dashboard',
    },
  ];

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

  isDropdownOpen = false;
  onOpen() {
    this.isDropdownOpen = true;
  }
  onClose() {
    this.isDropdownOpen = false;
  }
}
