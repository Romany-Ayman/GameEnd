import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDelailsComponent } from './game-delails.component';

describe('GameDelailsComponent', () => {
  let component: GameDelailsComponent;
  let fixture: ComponentFixture<GameDelailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDelailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameDelailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
