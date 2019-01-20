import { Injectable } from '@angular/core';

// import * as Fs from 'fs';
import { Observable, from, AsyncSubject } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private _cacheSpeech: { [key: string]: Observable<Speech> } = {};
  private _voices: AsyncSubject<any[]> = new AsyncSubject<any[]>();

  constructor(private _logger: NGXLogger) { }

  public speak(text: string): Observable<boolean> {
    text = 'This is a text';
    return this.getSpeech('')
      .pipe(flatMap(speech => {
        return from(speech.speak({
          text: text,
          queue: true,
          listeners: {
            onstart: () => {
              this._logger.info('Start utterance');
            },
            onend: () => {
              this._logger.info('End utterance');
            },
            onresume: () => {
              this._logger.info('Resume utterance');
            },
            onboundary: (event) => {
              this._logger.info(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.');
            }
          }
        }));
      }));
  }

  private getSpeech(request: string): Observable<Speech> {
    this._cacheSpeech[request] = this._cacheSpeech[request] || fetchSpeech();
    return this._cacheSpeech[request];
  }
}

function fetchSpeech(): Observable<Speech> {
  const speech = new Speech();
  if (!speech.hasBrowserSupport()) {
    const error = new Error(
      'Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !');
    return Observable.throw(error);
  }
  return from(speech.init({
    volume: 0.5,
    lang: 'en-GB',
    rate: 1,
    pitch: 1,
    // 'voice':'Google UK English Male',
    // 'splitSentences': false,
    listeners: {
      onvoiceschanged: (voices: any) => {
        this._logger.info('Voices changed:', voices);
        this._voices.next(voices);
      }
    }
  }));
}
