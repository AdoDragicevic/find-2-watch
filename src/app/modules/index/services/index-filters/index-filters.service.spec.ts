import { TestBed } from '@angular/core/testing';

import { IndexFiltersService } from './index-filters.service';

describe('IndexFiltersService', () => {
  let service: IndexFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
