import { TestBed } from '@angular/core/testing';

import { SlideShowService } from './slide-show.service';
import { courses } from '../../api/course-definition';

describe('SlideShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideShowService = TestBed.get(SlideShowService);
    expect(service).toBeTruthy();
  });

  it('can convert', () => {
    const service: SlideShowService = TestBed.get(SlideShowService);
    for(const course of courses) {
      const show = service.toSlideShow(course);
      expect(show.title).toBeDefined();
      expect(show.slides.length).toBeGreaterThan(0);
    }
  });
});
