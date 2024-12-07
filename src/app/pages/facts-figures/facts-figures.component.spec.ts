import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsFiguresComponent } from './facts-figures.component';

describe('FactsFiguresComponent', () => {
  let component: FactsFiguresComponent;
  let fixture: ComponentFixture<FactsFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsFiguresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactsFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
