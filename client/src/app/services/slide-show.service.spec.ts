import { TestBed } from '@angular/core/testing';

import { SlideShowService } from './slide-show.service';

describe('SlideShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideShowService = TestBed.get(SlideShowService);
    expect(service).toBeTruthy();
  });
});
