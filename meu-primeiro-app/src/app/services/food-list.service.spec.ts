import { TestBed } from '@angular/core/testing';

import { FoodListService } from './food-list.service';

describe('FoodListService', () => {
  let service: FoodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
