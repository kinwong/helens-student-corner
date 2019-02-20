import { Injectable } from '@angular/core';
import {Howl} from 'howler';
import { Observable } from 'rxjs';
import { Media } from './slide-show-player.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class WavePlayerService {

  constructor(
    private _logger: NGXLogger) { }

  play(mp3: string): Observable<Media> {
    const data = 'data:audio/mp3;base64,' + mp3;
    return Observable.create(
      observer => {
        const sound = new Howl({
          src: [data],
          volume: 1.0,
          onplay: id => this._logger.debug(`WavePlayerService.play(id=${id})`),
          onpause: id => this._logger.debug(`WavePlayerService.pause(id=${id})`),
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
          pause: () => {
            sound.pause();
            this._logger.debug('WavePlayerService.pause()');
          },
          resume: () => sound.play()
        });
        return () => sound.stop();
    });
  }
}
