import { TestBed } from '@angular/core/testing';

import { CreditsResultsService } from './credits-results.service';

describe('CreditsResultsService', () => {
  let service: CreditsResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditsResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
