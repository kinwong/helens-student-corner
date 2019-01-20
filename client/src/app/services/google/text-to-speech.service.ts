import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

import {SynthesizeRequest, SynthesizeResponse, AudioEncoding, SsmlVoiceGender } from '../../../api/text-to-speech/contract';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private static apiBaseUrl = 'https://texttospeech.googleapis.com';
  private static apiVersion = 'v1';
  private static apiKey = 'AIzaSyCj2Tbuud7sNPzUUwV0IID4PFBk6byu9vk';

  constructor(private _http: HttpClient) {
  }
  public speak(text: string): Observable<boolean> {
    console.log('speaking ' + text);
    return this.requestSpeech(text)
      .pipe(concatMap(mp3 => {
        return this.play(mp3);
      }));
  }

  requestSpeech(text: string): Observable<string> {
    const request: SynthesizeRequest = {
      input: {
        text: text
      },
      voice: {
        languageCode: 'en-GB',
        ssmlGender: SsmlVoiceGender.Male
      },
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
  private play(mp3: string): Observable<boolean> {
    const audio = new Audio('data:audio/mp3;base64,' + mp3);
    return Observable.create(observer => {
        audio.play();
        observer.next(true);
        observer.complete(true);
    });
  }
}
