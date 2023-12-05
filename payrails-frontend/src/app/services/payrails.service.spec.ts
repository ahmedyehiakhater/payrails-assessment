import { TestBed } from '@angular/core/testing';

import { PayrailsService } from './payrails.service';

describe('PayrailsService', () => {
  let service: PayrailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
