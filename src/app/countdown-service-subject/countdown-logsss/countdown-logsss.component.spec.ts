import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLogsssComponent } from './countdown-logsss.component';

describe('CountdownLogsssComponent', () => {
  let component: CountdownLogsssComponent;
  let fixture: ComponentFixture<CountdownLogsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownLogsssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLogsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
