import { Injectable } from '@angular/core';
import { TextToSpeechService } from './google/text-to-speech.service';
import { Observable, concat, BehaviorSubject, interval, empty, of } from 'rxjs';
import { Course, Exercise } from '../course-definition';
import lodash from 'lodash';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import { map, startWith, switchMap, scan, takeWhile, distinctUntilChanged, mapTo, concatMap } from 'rxjs/operators';
import { WavePlayerService, MediaControl } from './wave-player.service';
import { SettingsService } from './settings.service';
import { speakers } from 'src/api';

export interface Frame {
  title: string;
  total: number;
  index: number;
  text: string;
}

export enum PlaybackState {
  speaking, waiting, paused
}
export interface Playback {
  onstate: (state: PlaybackState) => void;
  ontext: (text: string) => void;
}

@Injectable({
  providedIn: 'root'
})
export class CoursePlayingService {
  constructor(
    private _speech: TextToSpeechService,
    private _player: WavePlayerService,
    private _settings: SettingsService) {
  }

  play(playBack: Playback, course: Course): Observable<MediaControl> {
    let voice = this._settings.settings.speaker.voice;
    if (voice === undefined) {
      voice = speakers[Math.floor(Math.random() * 4.0)].voice;
    }
    const all = Array.from(this.compile(playBack, voice, course));
    return concat(all[0], all[1]);
  }

  private  * compile(playback: Playback, voice: VoiceSelectionParams, course: Course): IterableIterator<Observable<MediaControl>> {
    for(let greeting of course.greetings) {
      yield this.say(playback, voice, greeting);
    }
    for(let exercise of generateExercises(course)) {
      yield this.say(playback, voice, exercise.text, 2.0);
    }
    for(let valediction of course.valedictions) {
      yield this.say(playback, voice, valediction);
    }
  }
  private say(playback: Playback, voice: VoiceSelectionParams, text: string, pauseInSeconds: number = 0): Observable<MediaControl> {
    const speech$ = this._speech.toSpeech(voice, `<speak>${text}</speak>`)
      .pipe(concatMap(mp3 => this._player.play(mp3)));
    if (pauseInSeconds == 0) return speech$;

    const playing = new BehaviorSubject<boolean>(true);
    const wait$ = createCountdownTimer(pauseInSeconds, playing).pipe(map(_ => <MediaControl>{
      pause: () => playing.next(true), resume: () => playing.next(false)}));
    return concat(speech$, wait$);
  }
}

function* generateExercises(course: Course)
  : IterableIterator<{ title: string, total: number, index: number, text: string }> {

  for (let exercise of course.exercises) {
    const total = exercise.scales.length;
    const count = lodash.floor(exercise.ratio * total);
    for (let details of generateScales(count, exercise)) {
      yield {
        title: exercise.name,
        total: count,
        index: details.index,
        text: details.text
      }
    }
  }
}
function* generateScales(count: number, exercise: Exercise)
  : IterableIterator<{ index: number, text: string }> {

  const total = exercise.scales.length;
  const selections = new Set<number>();
  for (let index = 0; index < count; ++index) {
    let selection: number;
    while (true) {
      selection = Math.random() * total;
      if (!selections.has(selection)) break;
    }
    selections.add(selection);
    yield {
      index: index,
      text: exercise.scales[selection]
    };
  }
}
function createCountdownTimer(
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