import { TestBed } from '@angular/core/testing';

import { TextToSpeechService } from './text-to-speech.service';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from '../ngx-logger.mock';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TextToSpeechService', () => {
  let textToSpeech: TextToSpeechService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      { provide: NGXLogger, useClass: NGXLoggerMock },
    ]
  }));

  textToSpeech = TestBed.get(TextToSpeechService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: TextToSpeechService = TestBed.get(TextToSpeechService);
    expect(service).toBeTruthy();
  });
});
