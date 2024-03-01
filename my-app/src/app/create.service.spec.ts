import { TestBed } from '@angular/core/testing';

import { createService } from './create.service';
import { Customer } from '../models/customer';

describe('CreateService', () => {
  let service: createService<Customer>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(createService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
