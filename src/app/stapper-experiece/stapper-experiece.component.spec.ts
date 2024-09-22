import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StapperExperieceComponent } from './stapper-experiece.component';

describe('StapperExperieceComponent', () => {
  let component: StapperExperieceComponent;
  let fixture: ComponentFixture<StapperExperieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StapperExperieceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StapperExperieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
