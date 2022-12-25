import { TestBed } from '@angular/core/testing';

import { HttpSubscriberService } from './http-subscriber.service';

describe('HttpSubscriberService', () => {
  let service: HttpSubscriberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSubscriberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
