import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from '../mocks/ngx-logger.mock';

describe('MediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      { provide: NGXLogger, useClass: NGXLoggerMock },
    ]
  }));

  it('should be created', () => {
    const service: MediaService = TestBed.get(MediaService);
    expect(service).toBeTruthy();
  });

  it('can pause and resume', () => {

  });
});
