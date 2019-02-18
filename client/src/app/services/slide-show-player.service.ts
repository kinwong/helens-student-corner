import { Injectable } from '@angular/core';
import { TextToSpeechService } from './google/text-to-speech.service';
import { Observable, concat, BehaviorSubject, interval, empty, Subscription, from } from 'rxjs';
import { VoiceSelectionParams, AudioConfig } from 'src/api/text-to-speech/contract';
import { map, startWith, switchMap, scan, takeWhile, distinctUntilChanged, mapTo, concatMap, tap } from 'rxjs/operators';
import { WavePlayerService } from './wave-player.service';
import { SlideShow, Slide } from './slide-show.service';

export enum StateType {
  stopped,
  preparing,
  playing,
  paused
}

export interface Media {
  pause(): void;
  resume(): void;
}

@Injectable({
  providedIn: 'root'
})
export class SlideShowPlayerService {
  private _subscription: Subscription;
  private _media: Media;

  get canPlay(): boolean { return this.slideShow && this.state === StateType.stopped; }
  get canResume(): boolean { return this.state === StateType.paused; }
  get canPause(): boolean { return this.state === StateType.playing; }
  get canStop(): boolean { return this.state === StateType.playing || this.state === StateType.preparing; }

  slideShow: SlideShow;
  state: StateType = StateType.stopped;
  text: string;

  constructor(
    private _speech: TextToSpeechService,
    private _player: WavePlayerService) {
  }

  play() {
    this.stop();
    this.state = StateType.playing;
    this._subscription = this.from(this.slideShow)
      .subscribe(media => this._media = media, 
        error => {
          console.error(error);
          this.reset();
        },
        () => {
          this.reset();
        });
  }
  stop() {
    if (!this._subscription) {
      this._subscription.unsubscribe();
    }
    this.reset();
  }
  pause(): void {
    if(this._media) {
      this._media.pause();
      this.state = StateType.paused;
    }
  }
  resume(): void {
    if(this._media) {
      this._media.resume();
      this.state = StateType.playing;
    }
  }
  private reset(): void {
    this._subscription = undefined;
    this._media = undefined;
    this.state = StateType.stopped;
  }


  private from(slideShow: SlideShow): Observable<Media> {
    const slideShow$ = from(slideShow.slides)
      .pipe(
        concatMap(slide => this.fromSlide(slideShow, slide)));
    return slideShow$;
  }
  private fromSlide(slideShow: SlideShow, slide: Slide): Observable<Media> {
    const media$ = from([slide]).pipe(
      tap(_ => {
        if (slide.text)
          this.text = slide.text;
      }),
      concatMap(slide => {
        if (slide.speech) {
          return this.say(slideShow.voice, slideShow.config, slide.speech, slide.delay);
        }
        if (slide.delay) {
          return delay(slide.delay);
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
    const wait$ = wait(pauseInSeconds, playing).pipe(map(_ => <Media>{
      pause: () => playing.next(true),
      resume: () => playing.next(false)
    }));
    return concat(speech$, wait$);
  }
}
function delay(
  countdownSeconds: number): Observable<Media> {

  const playing = new BehaviorSubject<boolean>(true);
  const wait$ = wait(countdownSeconds, playing)
    .pipe(map(_ => <Media>{
      pause: () => playing.next(true),
      resume: () => playing.next(false)
    }));
  return wait$;
}
function wait(
  countdownSeconds: number, playing$: BehaviorSubject<boolean>): Observable<number> {
  const interval$ = interval(1000).pipe(mapTo(-1));
  const timer$ = playing$
    .pipe(
      startWith(true),
      distinctUntilChanged(),

      switchMap(playing => (playing ? interval$ : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
      takeWhile(v => v >= 0));
  return timer$;
}