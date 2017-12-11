import { TestBed, inject } from '@angular/core/testing';

import { ShopbotListService } from './shopbot-list.service';

describe('ShopbotListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopbotListService]
    });
  });

  it('should be created', inject([ShopbotListService], (service: ShopbotListService) => {
    expect(service).toBeTruthy();
  }));
});
