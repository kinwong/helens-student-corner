import { TestBed } from '@angular/core/testing';

import { WavePlayerService } from './wave-player.service';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from './ngx-logger.mock';

describe('WavePlayerService', () => {
  beforeEach(() =>
  TestBed.configureTestingModule({
    imports: [
    ],
    providers: [
      { provide: NGXLogger, useClass: NGXLoggerMock }
    ]
  }));

  it('should be created', () => {
    const service: WavePlayerService = TestBed.get(WavePlayerService);
    expect(service).toBeTruthy();
  });
});
