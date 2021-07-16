import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerssComponent } from './countdown-timerss.component';

describe('CountdownTimerssComponent', () => {
  let component: CountdownTimerssComponent;
  let fixture: ComponentFixture<CountdownTimerssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
