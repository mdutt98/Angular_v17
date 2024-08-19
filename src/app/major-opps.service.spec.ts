import { TestBed } from '@angular/core/testing';

import { MajorOppsService } from './major-opps.service';

describe('MajorOppsService', () => {
  let service: MajorOppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorOppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
