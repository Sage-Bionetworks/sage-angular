import { TestBed } from '@angular/core/testing';

import { SagebioAngularService } from './sagebio-angular.service';

describe('SagebioAngularService', () => {
  let service: SagebioAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagebioAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
