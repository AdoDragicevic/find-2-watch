import { TestBed } from '@angular/core/testing';

import { BiographyResultsService } from './biography-results.service';

describe('BiographyResultsService', () => {
  let service: BiographyResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographyResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
