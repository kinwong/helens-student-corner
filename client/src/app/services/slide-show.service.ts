import * as lodash from 'lodash';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AudioConfig, AudioEncoding, VoiceSelectionParams } from 'src/app/models/contract';
import { Course, Exercise, Sentence } from 'src/app/models/models';
import { speakers } from 'src/app/models/speaker';
import { State } from '../reducers';
import { CourseService } from './course.service';
import { ExerciseService } from './exercise.service';
import { Observable, combineLatest, zip } from 'rxjs';
import { map, filter, distinctUntilChanged, flatMap } from 'rxjs/operators';

export interface Slide {
  total: number;
  index: number;
  text?: string;
  speech?: string;
  delay?: number;
}
export interface SlideShow {
  config: AudioConfig;
  voice: VoiceSelectionParams;
  title: string;
  slides: Slide[];
}

@Injectable({
  providedIn: 'root'
})
export class SlideShowService {
  constructor(
    private _store: Store<State>,
    private _courses: CourseService,
    private _exercises: ExerciseService) {
  }
  /**
   * Compiles the model into a slide show.
   */
  toSlideShow(model: State): Observable<SlideShow> {
    let voice = model.pref.speaker.voice;
    if (!voice) {
      // Just pick a voice randomly.
      voice = speakers[Math.floor(Math.random() * 4.0)].voice;
    }
    const config: AudioConfig = {
      audioEncoding: AudioEncoding.MP3,
      speakingRate: model.pref.speed
    };

    const ready$ = combineLatest([this._courses.loaded$, this._exercises.loaded$])
      .pipe(
        map(results => results[0] && results[1]),
        distinctUntilChanged(),
        filter(ready => ready));

    const slideShow$ = ready$.pipe(
        flatMap(_ => {
          const entities$ = zip(
            this._courses.getByKey(model.practice.selectedCourseName),
            this._exercises.entities$);
          return entities$;
        }),
        map(data => {
          const course = data[0];
          const slides = Array.from(
            this.courseToSlides(course, data[1]));
            return <SlideShow>{
              config,
              voice,
              title: course.name,
              slides: slides,
            };
        }));
    return slideShow$;
  }
  private * courseToSlides(course: Course, exercises: Exercise[]): IterableIterator<Slide> {

    // for (const greeting of course.greetings) {
    //   yield <Slide>{
    //     text: greeting,
    //     speech: toSsml(greeting),
    //   };
    // }

    // for (const name of exercisesToSlides(course.exerciseNames)) {
    //   slide.delay = 3;
    //   yield slide;
    // }
    // for (const valediction of course.valedictions) {
    //   yield <Slide>{
    //     text: valediction,
    //     speech: toSsml(valediction),
    //   }
    // }
  }
}
function* exercisesToSlides(exercises: Exercise[]): IterableIterator<Slide> {

  // for (const exercise of exercises) {
  //   if (!exercise.active) { continue; }

  //   const total = exercise.scales.length;
  //   const count = lodash.floor(exercise.ratio * total);

  //   for (let slide of exerciseToSlides(count, exercise)) {
  //     yield slide;
  //   }
  // }
}
function* exerciseToSlides(total: number, exercise: Exercise): IterableIterator<Slide> {

  yield sentenceToSlide(exercise.instruction);

  const totalScales = exercise.scales.length;

  const selections = new Set<number>();
  for (let index = 0; index < total; ++index) {
    let selection: number;
    while (true) {
      selection = Math.floor(Math.random() * totalScales);
      if (!selections.has(selection)) { break; }
    }

    selections.add(selection);
    yield sentenceToSlide(
      exercise.scales[selection], total, index);
  };
}
// tslint:disable-next-line: no-unnecessary-initializer
function sentenceToSlide(sentence: Sentence, total: number = undefined, index: number = undefined): Slide {
  const speech = (sentence.speech) ? sentence.speech : toSsml(sentence.display);
  return <Slide>{
    index: index,
    total: total,
    text: sentence.display,
    speech: speech,
    delay: sentence.delay
  };
}

function toSsml(text: string) {
  return `<speak>${text}</speak>`;
}

