import { TestBed } from '@angular/core/testing';

import { HttpRequestConfigService } from './http-request-config.service';

describe('HttpRequestConfigService', () => {
  let service: HttpRequestConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
