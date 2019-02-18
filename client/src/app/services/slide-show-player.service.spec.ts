import { TestBed } from '@angular/core/testing';

import { SlideShowPlayerService } from './slide-show-player.service';

describe('CoursePlayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideShowPlayerService = TestBed.get(SlideShowPlayerService);
    expect(service).toBeTruthy();
  });
});
