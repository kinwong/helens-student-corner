import { TestBed } from '@angular/core/testing';

import { WavePlayerService } from './wave-player.service';

describe('WavePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WavePlayerService = TestBed.get(WavePlayerService);
    expect(service).toBeTruthy();
  });
});
