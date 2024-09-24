import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfontComponent } from './notfont.component';

describe('NotfontComponent', () => {
  let component: NotfontComponent;
  let fixture: ComponentFixture<NotfontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
