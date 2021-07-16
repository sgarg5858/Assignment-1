import { TestBed } from '@angular/core/testing';

import { CountdownStateService } from './countdown-state.service';

describe('CountdownStateService', () => {
  let service: CountdownStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountdownStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
