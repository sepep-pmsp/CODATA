import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosPageComponent } from './estudos-page.component';

describe('EstudosPageComponent', () => {
  let component: EstudosPageComponent;
  let fixture: ComponentFixture<EstudosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
