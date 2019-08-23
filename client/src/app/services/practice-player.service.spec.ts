import { TestBed } from '@angular/core/testing';

import { PracticePlayerService } from './practice-player.service';

describe('PracticePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticePlayerService = TestBed.get(PracticePlayerService);
    expect(service).toBeTruthy();
  });
});
