import { TestBed } from '@angular/core/testing';

import { CoursePlayingService } from './course-playing.service';

describe('CoursePlayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursePlayingService = TestBed.get(CoursePlayingService);
    expect(service).toBeTruthy();
  });
});
