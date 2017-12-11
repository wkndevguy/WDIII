import { TestBed, inject } from '@angular/core/testing';

import { GetUpcDataService } from './get-upc-data.service';

describe('GetUpcDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUpcDataService]
    });
  });

  it('should be created', inject([GetUpcDataService], (service: GetUpcDataService) => {
    expect(service).toBeTruthy();
  }));
});
