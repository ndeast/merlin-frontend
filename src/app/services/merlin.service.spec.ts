import { TestBed } from '@angular/core/testing';

import { MerlinService } from './merlin.service';

describe('MerlinService', () => {
  let service: MerlinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerlinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
