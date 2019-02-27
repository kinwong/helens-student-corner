import { Injectable } from '@angular/core';
import { TextToSpeechService } from './google/text-to-speech.service';
import { Observable, concat, BehaviorSubject, interval, empty, Subscription, from } from 'rxjs';
import { VoiceSelectionParams, AudioConfig } from 'src/api/text-to-speech/contract';
import { map, startWith, switchMap, scan, takeWhile, distinctUntilChanged, mapTo, concatMap, tap } from 'rxjs/operators';
import { WavePlayerService } from './wave-player.service';
import { SlideShow, Slide } from './slide-show.service';
import { NGXLogger } from 'ngx-logger';

export enum StateType {
  stopped,
  preparing,
  playing,
  paused
}

export class SlideShowPlayer {
  private _subscription: Subscription;
  private _media: Media;

  state: StateType = StateType.stopped;
  text: string;
  total: number;
  current: number;

  get canPlay(): boolean { return this.slideShow && this.state === StateType.stopped; }
  get canResume(): boolean { return this.state === StateType.paused; }
  get canPause(): boolean { return this.state === StateType.playing; }
  get canStop(): boolean { return this.state === StateType.playing || this.state === StateType.preparing; }

  constructor(
    public slideShow: SlideShow,
    private _logger: NGXLogger,
    private _speech: TextToSpeechService,
    private _player: WavePlayerService) {
      this.total = slideShow.slides.length;
      this.current = 0;
  }
  play() {
    this.stop();
    this.state = StateType.playing;
    this._subscription = this.from(this.slideShow)
      .subscribe(media => {
        this._media = media;
        this.current++;
      },
        error => {
          this._logger.error(error);
          this.reset();
          this.current = this.total;
        },
        () => {
          this.reset();
          this.current = this.total;
        });
  }
  stop() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this.reset();
  }
  pause(): void {
    if (this._media) {
      this._media.pause();
      this.state = StateType.paused;
    }
  }
  resume(): void {
    if (this._media) {
      this._media.resume();
      this.state = StateType.playing;
    }
  }
  private reset(): void {
    this._subscription = undefined;
    this._media = undefined;
    this.state = StateType.stopped;
    this.current = 0;
  }

  private from(slideShow: SlideShow): Observable<Media> {
    const slideShow$ = from(slideShow.slides)
      .pipe(
        concatMap(slide => {
          return this.fromSlide(slideShow, slide);
        }));
    return slideShow$;
  }
  private fromSlide(slideShow: SlideShow, slide: Slide): Observable<Media> {
    const media$ = from([slide]).pipe(
      tap(_ => {
        if (slide.text) {
          this.text = slide.text;
        }
      }),
      concatMap(slide => {
        if (slide.speech) {
          return this.say(slideShow.voice, slideShow.config, slide.speech, slide.delay);
        }
        if (slide.delay) {
          return this.delay(slide.delay);
        }
      }));
    return media$;
  }
  private say(
    voice: VoiceSelectionParams,
    config: AudioConfig, ssml: string, pauseInSeconds: number): Observable<Media> {

    const speech$ = this._speech.toSpeech(voice, config, ssml)
      .pipe(concatMap(mp3 => this._player.play(mp3)));
    if (!pauseInSeconds) return speech$;

    const playing = new BehaviorSubject<boolean>(true);
    const wait$ = this.wait(pauseInSeconds, playing).pipe(map(_ => <Media>{
      pause: () => playing.next(true),
      resume: () => playing.next(false)
    }));
    return concat(speech$, wait$);
  }
  private delay(
    countdownSeconds: number): Observable<Media> {

    const playing = new BehaviorSubject<boolean>(true);
    const media: Media = {
      pause: () => {
        playing.next(true);
        this._logger.debug('delay.pause()');
      },
      resume: () => {
        playing.next(false);
        this._logger.debug('delay.resume()');
      }
    };
    const wait$ = this.wait(countdownSeconds, playing)
      .pipe(map(_ => media));
    return wait$;
  }
  private wait(
    countdownSeconds: number, playing$: BehaviorSubject<boolean>): Observable<number> {
    const interval$ = interval(1000).pipe(mapTo(-1));
    const timer$ = playing$
      .pipe(
        startWith(true),
        distinctUntilChanged(),

        switchMap(playing => (playing ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
        tap(i => this._logger.debug(`wait(${i})`)),
        takeWhile(v => v >= 0));
    return timer$;
  }  
}

export interface Media {
  pause(): void;
  resume(): void;
}
@Injectable({
  providedIn: 'root'
})
export class SlideShowPlayerService {
  constructor(
    private _logger: NGXLogger,
    private _speech: TextToSpeechService,
    private _player: WavePlayerService) {
  }
  create(slideShow: SlideShow): SlideShowPlayer {
    return new SlideShowPlayer(slideShow, this._logger, this._speech, this._player);
  }
}