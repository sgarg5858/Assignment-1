import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownClickTrackerComponent } from './countdown-click-tracker.component';

describe('CountdownClickTrackerComponent', () => {
  let component: CountdownClickTrackerComponent;
  let fixture: ComponentFixture<CountdownClickTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownClickTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownClickTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
