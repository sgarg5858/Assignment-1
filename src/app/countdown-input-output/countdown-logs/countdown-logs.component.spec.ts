import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLogsComponent } from './countdown-logs.component';

describe('CountdownLogsComponent', () => {
  let component: CountdownLogsComponent;
  let fixture: ComponentFixture<CountdownLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
