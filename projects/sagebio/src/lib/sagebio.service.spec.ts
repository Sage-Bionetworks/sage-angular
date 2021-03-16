import { TestBed } from '@angular/core/testing';

import { SagebioService } from './sagebio.service';

describe('SagebioService', () => {
  let service: SagebioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagebioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
