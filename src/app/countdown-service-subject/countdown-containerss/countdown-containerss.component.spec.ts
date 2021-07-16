import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownContainerssComponent } from './countdown-containerss.component';

describe('CountdownContainerssComponent', () => {
  let component: CountdownContainerssComponent;
  let fixture: ComponentFixture<CountdownContainerssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownContainerssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownContainerssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
