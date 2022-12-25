import { TestBed } from '@angular/core/testing';

import { IndexRequestConfigService } from './index-request-config.service';

describe('IndexRequestConfigService', () => {
  let service: IndexRequestConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexRequestConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
