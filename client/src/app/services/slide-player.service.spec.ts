import { TestBed } from '@angular/core/testing';

import { SlidePlayerService } from './slide-player.service';

describe('CoursePlayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidePlayerService = TestBed.get(SlidePlayerService);
    expect(service).toBeTruthy();
  });
});
