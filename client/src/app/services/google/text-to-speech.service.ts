import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeout, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// tslint:disable-next-line:max-line-length
import {
  SynthesizeRequest, SynthesizeResponse, AudioEncoding, VoiceSelectionParams, AudioConfig
} from '../../models/contract';
import { NGXLogger } from 'ngx-logger';

const defaultTimeoutInMilliseconds = 3 * 1000.0;

@Injectable({ providedIn: 'root'})
export class TextToSpeechService {
  private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private _logger: NGXLogger,
    private _http: HttpClient) {
  }
  public toSpeech(
    voice: VoiceSelectionParams,
    config: AudioConfig,
    ssml: string,
    timeoutInMilliseconds: number = defaultTimeoutInMilliseconds): Observable<string> {
    if (!config) {
      config = {
        audioEncoding: AudioEncoding.MP3
      };
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
        timeout(timeoutInMilliseconds),
        tap(_ => {},
          error => this._logger.error(error)));
  }
  private post(call: string, request: any): Observable<any> {
    const url = `${environment.apis.google.textToSspeech.baseUrl}/${environment.apis.google.textToSspeech.version}/${call}?key=${environment.apis.google.textToSspeech.key}`;
    return this._http.post(url, request, TextToSpeechService.httpOptions);
  }
}
