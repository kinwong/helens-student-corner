import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

// tslint:disable-next-line:max-line-length
import {
  SynthesizeRequest, SynthesizeResponse, AudioEncoding, VoiceSelectionParams
} from '../../../api/text-to-speech/contract';

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
  // speak(voice: VoiceSelectionParams, ssml: string): Observable<MediaControl> {
  //   // tslint:disable-next-line:no-console
  //   return this.toSpeech(voice, ssml)
  //     .pipe(concatMap(mp3 => {
  //       return this.play(mp3);
  //     }));
  // }
  toSpeech(voice: VoiceSelectionParams, ssml: string): Observable<string> {
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
    const url = `${TextToSpeechService.apiBaseUrl}/${TextToSpeechService.apiVersion}/${call}?key=${TextToSpeechService.apiKey}`;
    return this._http.post(url, request);
  }
}
