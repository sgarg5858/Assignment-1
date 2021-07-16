import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownClickTrackerssComponent } from './countdown-click-trackerss.component';

describe('CountdownClickTrackerssComponent', () => {
  let component: CountdownClickTrackerssComponent;
  let fixture: ComponentFixture<CountdownClickTrackerssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownClickTrackerssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownClickTrackerssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
