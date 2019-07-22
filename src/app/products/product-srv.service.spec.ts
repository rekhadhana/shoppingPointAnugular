import { TestBed } from '@angular/core/testing';

import { ProductSrvService } from './product-srv.service';

describe('ProductSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSrvService = TestBed.get(ProductSrvService);
    expect(service).toBeTruthy();
  });
});
