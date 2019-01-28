import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import {Howl} from 'howler';
import { NGXLogger } from 'ngx-logger';

// tslint:disable-next-line:max-line-length
import {
  SynthesizeRequest, SynthesizeResponse, AudioEncoding, VoiceSelectionParams
} from '../../../api/text-to-speech/contract';

export interface MediaControl {
  /**
   * Pauses a music.
   */
  pause: () => void;
  resume: () => void;
}
@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private static apiBaseUrl = 'https://texttospeech.googleapis.com';
  private static apiVersion = 'v1';
  private static apiKey = 'AIzaSyCj2Tbuud7sNPzUUwV0IID4PFBk6byu9vk';

  constructor(
    private _logger: NGXLogger,
    private _http: HttpClient) {
  }
  public speak(voice: VoiceSelectionParams, ssml: string): Observable<MediaControl> {
    // tslint:disable-next-line:no-console
    console.info('Speaking: ' + ssml);
    return this.requestSpeech(voice, ssml)
      .pipe(concatMap(mp3 => {
        return this.play(mp3);
      }));
  }
  requestSpeech(voice: VoiceSelectionParams, ssml: string): Observable<string> {
    const request: SynthesizeRequest = {
      input: {
        ssml: `<speak>${ssml}</speak>`
      },
      voice: voice,
      audioConfig: {
        audioEncoding: AudioEncoding.MP3
      }
    };
    return this.post('text:synthesize', request)
      .pipe(map(response => {
        return (response as SynthesizeResponse).audioContent;
      }));
  }
  private post(call: string, request: any): Observable<any> {
    return this._http.post(
      `${TextToSpeechService.apiBaseUrl}/${TextToSpeechService.apiVersion}/${call}?key=${TextToSpeechService.apiKey}`, request);
  }
  private play(mp3: string): Observable<MediaControl> {
    const data = 'data:audio/mp3;base64,' + mp3;
    return Observable.create(observer => {
        const sound = new Howl({
          src: [data],
          volume: 1.0,
          onplay: id => this._logger.debug(`play(${id})`),
          onpause: id => this._logger.debug(`pause(${id})`),
          onloaderror: (_, error) => {
            observer.error(error);
          },
          onplayerror: (_, error) => {
            observer.error(error);
          },
          onend: (_) => {
            observer.complete();
          }
        });
        sound.play();
        observer.next({
          pause: () => sound.pause(),
          resume: () => sound.play()
        });
        return () => sound.stop();
    });
  }
}
