import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownCreateResetComponent } from './countdown-create-reset.component';

describe('CountdownCreateResetComponent', () => {
  let component: CountdownCreateResetComponent;
  let fixture: ComponentFixture<CountdownCreateResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownCreateResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownCreateResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
