import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasPageComponent } from './sistemas-page.component';

describe('SistemasPageComponent', () => {
  let component: SistemasPageComponent;
  let fixture: ComponentFixture<SistemasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SistemasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
