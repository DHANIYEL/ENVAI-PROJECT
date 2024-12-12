import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateSectionComponent } from './animate-section.component';

describe('AnimateSectionComponent', () => {
  let component: AnimateSectionComponent;
  let fixture: ComponentFixture<AnimateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
