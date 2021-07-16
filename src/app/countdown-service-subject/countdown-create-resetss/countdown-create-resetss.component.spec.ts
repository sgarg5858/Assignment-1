import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownCreateResetssComponent } from './countdown-create-resetss.component';

describe('CountdownCreateResetssComponent', () => {
  let component: CountdownCreateResetssComponent;
  let fixture: ComponentFixture<CountdownCreateResetssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownCreateResetssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownCreateResetssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
