import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesProjectsComponent } from './pages-projects.component';

describe('PagesProjectsComponent', () => {
  let component: PagesProjectsComponent;
  let fixture: ComponentFixture<PagesProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
