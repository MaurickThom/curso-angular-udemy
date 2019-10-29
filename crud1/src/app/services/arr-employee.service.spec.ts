import { TestBed } from '@angular/core/testing';

import { ArrEmployeeService } from './arr-employee.service';

describe('ArrEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrEmployeeService = TestBed.get(ArrEmployeeService);
    expect(service).toBeTruthy();
  });
});
