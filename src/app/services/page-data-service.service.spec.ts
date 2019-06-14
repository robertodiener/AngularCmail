import { TestBed } from '@angular/core/testing';

import { PageDataServiceService } from './page-data-service.service';

describe('PageDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageDataServiceService = TestBed.get(PageDataServiceService);
    expect(service).toBeTruthy();
  });
});
