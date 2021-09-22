import { TestBed } from '@angular/core/testing';

import { MyCommonService } from './my-common.service';

describe('MyCommonService', () => {
  let service: MyCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
