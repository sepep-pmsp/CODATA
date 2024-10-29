import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdPageComponent } from './bd-page.component';

describe('BdPageComponent', () => {
  let component: BdPageComponent;
  let fixture: ComponentFixture<BdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
