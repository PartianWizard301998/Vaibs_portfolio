import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalexperiencesComponent } from './professionalexperiences.component';

describe('ProfessionalexperiencesComponent', () => {
  let component: ProfessionalexperiencesComponent;
  let fixture: ComponentFixture<ProfessionalexperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalexperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
