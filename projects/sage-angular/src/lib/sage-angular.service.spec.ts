import { TestBed } from '@angular/core/testing';

import { SageAngularService } from './sage-angular.service';

describe('SageAngularService', () => {
  let service: SageAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SageAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
