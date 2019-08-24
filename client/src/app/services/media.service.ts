import { Observable, defer, interval, NEVER, Subscription } from 'rxjs';
import { withLatestFrom, filter, switchMap, take, map, reduce, distinctUntilChanged, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Howl } from 'howler';
import { NGXLogger } from 'ngx-logger';

const defaultInterval = 100; // Reports every milliseconds

export interface MediaProgress {
  duration: number;
  current: number;
}
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private logger: NGXLogger) {
  }
  /**
   * Creates a pausible wave sound from base64 encoded MP3.
   */
  public createSound(mp3: string, pause$: Observable<boolean>): Observable<MediaProgress> {
    const data = 'data:audio/mp3;base64,' + mp3;
    let soundId: number;
    let subscriptionTimer: Subscription;
    const wave = new Observable<MediaProgress>(
      observer => {
        const sound = new Howl({
          src: [data],
          volume: 1.0,
          rate: 1.0,
          onplay: id => {
            this.logger.debug(`Sound[${id}] starts playing.`);
          },
          onpause: id => {
            this.logger.debug(`Sound[${id})] is paused.`);
          },
          onload: () => {
            this.logger.debug(`Sound[${soundId})] is loaded.`);
            const duration = Math.floor(sound.duration() * 1000);
            // Initial time.
            observer.next({ duration, current: 0 });
            subscriptionTimer = this.createTimer(defaultInterval, pause$)
              .subscribe(_ => observer.next({
                duration: Math.floor(sound.duration() * 1000),
                current: Math.floor(<number>sound.seek() * 1000)
              }),
                error => observer.error(error));
          },
          onloaderror: (id, error) => {
            this.logger.debug(`Sound[${id})] reports load error - ${error}.`);
            observer.error(error);
          },
          onplayerror: (id, error) => {
            this.logger.debug(`Sound[${id})] reports play error - ${error}.`);
            observer.error(error);
          },
          onend: (id) => {
            // Tell observer it's done.
            this.logger.debug(`Sound[${id}] ends.`);
            observer.complete();
          }
        });
        const subscription = pause$.pipe(distinctUntilChanged())
          .subscribe(paused => {
            if (paused) {
              if (sound.playing()) {
                this.logger.debug(`sound[${soundId}] is being paused...`);
                sound.pause(soundId);
              }
            } else {
              if (!sound.playing() && (soundId !== undefined)) {
                this.logger.debug(`sound[${soundId}] is being resumed...`);
                sound.play(soundId);
              }
            }
          });
        // Initial play is called.
        soundId = sound.play();
        return () => {
          this.logger.info(`Sound[${soundId}] is being disposed.`);
          if (subscriptionTimer) { subscriptionTimer.unsubscribe(); }
          if (subscription) { subscription.unsubscribe(); }
          sound.stop(soundId);
        };
      });
    return wave;
  }
  /**
   * Creates a waiter that can be paused.
   * @param duration The duration in milliseconds.
   * @param pause$ Observable for pausing.
   * @returns stepTimer and completeTimer.
   */
  public createWaiter(
    duration: number, pause$: Observable<boolean>): Observable<MediaProgress> {
    const totalInterval = Math.floor(duration / defaultInterval);
    let progress = 0;
    const waiter$ = interval(defaultInterval)
    .pipe(
        withLatestFrom(pause$),
        filter(([_, paused]) => !paused),
        take(totalInterval),
        map(() => <MediaProgress>{
          duration: duration,
          current: progress += defaultInterval
        }));
    return waiter$;
  }
  private createTimer(pulseInterval: number, pause$: Observable<boolean>): Observable<number> {
    const source = interval(pulseInterval);
    let total = 0;
    return pause$.pipe(
      switchMap(paused => paused ? NEVER : source.pipe(map(_ => total += pulseInterval))));
  }
}
