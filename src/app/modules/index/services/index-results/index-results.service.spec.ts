import { TestBed } from '@angular/core/testing';

import { IndexResultsService } from './index-results.service';

describe('IndexResultsService', () => {
  let service: IndexResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
