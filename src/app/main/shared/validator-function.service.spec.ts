import { TestBed } from '@angular/core/testing';

import { ValidatorFunctionService } from './validator-function.service';

describe('ValidatorFunctionService', () => {
  let service: ValidatorFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 