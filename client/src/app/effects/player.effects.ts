import { Observable, of, concat, EMPTY, BehaviorSubject } from 'rxjs';
import { exhaustMap, catchError, map, take, concatMap, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Store, Action, select } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';

import { State } from '../reducers';

import * as FromPractice from '../reducers/practice.reducer';
import * as FromMedia from '../reducers/media.reducer';

import * as MediaActions from '../actions/media.actions';
import * as PracticeActions from '../actions/practice.actions';

import { Speaker } from '../models/speaker';
import { PracticeContent } from '../models/practice-content';
import { TextToSpeechService } from '../services/google/text-to-speech.service';
import { MediaService } from '../services/media.service';
import { AudioConfig, AudioEncoding } from '../models/contract';
import { Sentence, Scale } from '../models/models';

function toSsml(text: string) {
  return `<speak>${text}</speak>`;
}

@Injectable()
export class PlayerEffects {
  private readonly paused$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private actions$: Actions,
    private logger: NGXLogger,
    private store: Store<State>,
    private speech: TextToSpeechService,
    private media: MediaService) {

    this.store.pipe(select(FromMedia.selectPaused))
      .subscribe(paused => this.paused$.next(paused));
  }
  practiceContentLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PracticeActions.loadContent, MediaActions.stop),
      switchMap(action => action.type === MediaActions.stop.type ?
        EMPTY : this.onLoad$())));

  onLoad$(): Observable<Action> {
    const content$ = this.store.pipe(select(FromPractice.selectContent));
    return content$.pipe(
      concatMap(content => this.playContent$(content)),
      catchError(error => of(MediaActions.reportError({ error }), MediaActions.stop())));
  }

  private playContent$(content: PracticeContent): Observable<Action> {
    const actions = [...this.buildContent(content)];
    const total = actions.length;

    const withChapters = actions.map((action, index) =>
      [of(MediaActions.setCurrentChapter({currentChapter : index})), action])
      .reduce((all, value) => all.concat(value), []);

    withChapters.unshift(of(MediaActions.setTotalChapter({ totalChapter: total })));
    return concat(...withChapters);
  }

  private *buildContent(
    content: PracticeContent): IterableIterator<Observable<Action>> {

    const config: AudioConfig = {
      audioEncoding: AudioEncoding.MP3,
      speakingRate: content.pref.speed
    };
    const speaker = content.speaker;
    for (const line of this.buildSpeech(config, speaker, content.course.greetings)) {
      yield line;
    }
    for (const action of this.buildExercises(config, speaker, content)) {
      yield action;
    }
    for (const line of this.buildSpeech(config, speaker, content.course.valedictions)) {
      yield line;
    }
  }
  private *buildExercises(
    config: AudioConfig, speaker: Speaker, content: PracticeContent): IterableIterator<Observable<Action>> {

    for (const activatedExercise of content.exercises) {
      const exercise = activatedExercise.exercise;
      // Instuction.
      for (const action of this.saySentance(config, speaker, exercise.instruction)) {
        yield action;
      }
      // Scales
      const crotchet = exercise.crotchet;
      for (const scale of activatedExercise.scales) {
        for (const action of this.sayScale(config, speaker, crotchet, scale)) {
          yield action;
        }
      }
    }
  }

  private *saySentance(
    config: AudioConfig, speaker: Speaker, sentance: Sentence): IterableIterator<Observable<Action>> {
    yield concat(
      of(MediaActions.setSubtitle({ subtitle: sentance.display })),
      (sentance.speech) ? this.say$(config, speaker, sentance.speech) : EMPTY);

    if (sentance.delay) {
      yield this.media.createWaiter(sentance.delay, this.paused$)
        .pipe(map(progress => MediaActions.setProgress({
          totalTime: progress.duration,
          currentTime: progress.current
        })));
    }
  }

  private *sayScale(
    config: AudioConfig, speaker: Speaker, crotchet: number, scale: Scale): IterableIterator<Observable<Action>> {
    yield concat(
      of(MediaActions.setSubtitle({ subtitle: scale.display })),
      (scale.speech) ? this.say$(config, speaker, scale.speech) : this.say$(config, speaker, scale.display));

    const octave = (scale.octaves) ? scale.octaves : 4;
    const notes = scale.notes ? scale.notes : 12;
    const duration = octave * notes * crotchet;
    yield this.media.createWaiter(duration, this.paused$).pipe(
      map(progress => MediaActions.setProgress({
        totalTime: progress.duration,
        currentTime: progress.current
      })));
  }

  private *buildSpeech(
    config: AudioConfig, speaker: Speaker, lines: string[]): IterableIterator<Observable<Action>> {
    for (const line of lines) {
      yield concat(
        of(MediaActions.setSubtitle({ subtitle: line })),
        this.say$(config, speaker, toSsml(line)));
    }
  }
  private say$(
    config: AudioConfig, speaker: Speaker, ssml: string): Observable<Action> {
    const speech$ = this.speech.toSpeech(speaker.voice, config, ssml)
      .pipe(
        concatMap(mp3 => this.media.createSound(mp3, this.paused$)),
        map(progress => MediaActions.setProgress({
          totalTime: progress.duration,
          currentTime: progress.current
        })));
    return speech$;
  }
  // onPause$(): Observable {
  // }
  // onStop$(): Observable {
  // }
}
