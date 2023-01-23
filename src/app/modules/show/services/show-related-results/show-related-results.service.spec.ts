import { TestBed } from '@angular/core/testing';

import { ShowRelatedResultsService } from './show-related-results.service';

describe('ShowRelatedResultsService', () => {
  let service: ShowRelatedResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRelatedResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
