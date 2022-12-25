import { TestBed } from '@angular/core/testing';

import { ShowRequestConfigService } from './show-request-config.service';

describe('ShowRequestConfigService', () => {
  let service: ShowRequestConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRequestConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
