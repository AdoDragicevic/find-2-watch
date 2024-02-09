import { TestBed } from '@angular/core/testing';

import { IndexAppliedFiltersService } from './index-applied-filters.service';

describe('IndexAppliedFiltersService', () => {
  let service: IndexAppliedFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexAppliedFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
