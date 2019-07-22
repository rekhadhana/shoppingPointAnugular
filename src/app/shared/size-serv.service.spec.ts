import { TestBed } from '@angular/core/testing';

import { SizeServService } from './size-serv.service';

describe('SizeServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeServService = TestBed.get(SizeServService);
    expect(service).toBeTruthy();
  });
});
