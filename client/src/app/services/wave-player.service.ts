import { Injectable } from '@angular/core';
import {Howl} from 'howler';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { MediaControl } from 'src/api/models';

@Injectable({
  providedIn: 'root'
})
export class WavePlayerService {

  constructor(
    private _logger: NGXLogger) { }

  play(mp3: string): Observable<MediaControl> {
    const data = 'data:audio/mp3;base64,' + mp3;
    return Observable.create(
      observer => {
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
