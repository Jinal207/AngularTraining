import { TestBed } from '@angular/core/testing';

import { CustPipeService } from './cust-pipe.service';

describe('CustPipeService', () => {
  let service: CustPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
