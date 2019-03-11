import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeout, tap } from 'rxjs/operators';

// tslint:disable-next-line:max-line-length
import {
  SynthesizeRequest, SynthesizeResponse, AudioEncoding, VoiceSelectionParams, AudioConfig
} from '../../../api/text-to-speech/contract';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private static readonly timeoutInMilliseconds = 10.0 * 1000.0;
  private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private static apiBaseUrl = 'https://texttospeech.googleapis.com';
  private static apiVersion = 'v1';
  private static apiKey = 'AIzaSyCj2Tbuud7sNPzUUwV0IID4PFBk6byu9vk';

  constructor(
    private _logger: NGXLogger,
    private _http: HttpClient) {
  }
  // speak(voice: VoiceSelectionParams, ssml: string): Observable<MediaControl> {
  //   // tslint:disable-next-line:no-console
  //   return this.toSpeech(voice, ssml)
  //     .pipe(concatMap(mp3 => {
  //       return this.play(mp3);
  //     }));
  // }
  toSpeech(voice: VoiceSelectionParams, config: AudioConfig = undefined, ssml: string): Observable<string> {
    if(config == undefined) {
      config = {
        audioEncoding: AudioEncoding.MP3
      }
    }
    const request: SynthesizeRequest = {
      input: { ssml: ssml },
      voice: voice,
      audioConfig: config
    };
    return this.post('text:synthesize', request)
      .pipe(
        map(response => {
          return (response as SynthesizeResponse).audioContent;
        }),
        timeout(TextToSpeechService.timeoutInMilliseconds),
        tap(_=>{}, 
          error => this._logger.error(error)));
  }
  private post(call: string, request: any): Observable<any> {
    const url = `${TextToSpeechService.apiBaseUrl}/${TextToSpeechService.apiVersion}/${call}?key=${TextToSpeechService.apiKey}`;
    return this._http.post(url, request, TextToSpeechService.httpOptions);
  }
}
