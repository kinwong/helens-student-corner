import { Injectable } from '@angular/core';
import { TextToSpeechService, MediaControl } from './google/text-to-speech.service';
import { Observable, concat, generate } from 'rxjs';
import { Course, Exercise } from '../course-definition';
import lodash from 'lodash';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import { tap, retry } from 'rxjs/operators';
import { WavePlayerService } from './wave-player.service';
import { randomBates } from 'd3';

export enum PlaybackState {
  speaking, waiting, paused
}
export interface Playback {
  voice: VoiceSelectionParams;
  course: Course;
  onstate: (state: PlaybackState) => void;
  ontext: (text: string) => void;
}

@Injectable({
  providedIn: 'root'
})
export class CoursePlayingService {
  constructor(
    private _speech: TextToSpeechService,
    private _player: WavePlayerService) {

    }
  play(playback: Playback): Observable<MediaControl> {
    const course = playback.course;

    const greetings = course.greetings.map(greeting => this.read(playback, greeting));
    const scales = lodash.flatMap(course.exercises, exercise => {
      const count = lodash.floor(exercise.ratio * exercise.scales.length);
      const texts = CoursePlayingService.shuffle(exercise.scales, count);
      return texts.map(text => this.read(playback, text));
    });
    const valedictions = course.valedictions
      .map(valediction => this.read(playback, valediction));

    const all = greetings.concat(scales, valedictions);
    // return concat<MediaControl, MediaControl>(all);
    return concat(all[0], all[1]);
  }

  private read(playback: Playback, text: string): Observable<MediaControl> {
    return this._speech.speak(playback.voice, text)
      .pipe(
        tap(x => playback.ontext(text)));
  }

  private static shuffle(texts: string[], count: number): string[] {
    return texts;
  }

  private static * generateExercises(course: Course): any {
    for(let exercise of course.exercises) {
      const total = exercise.scales.length;
      const count = lodash.floor(exercise.ratio * total);
      for(let scaleDetails of CoursePlayingService.generateScales(count, exercise)) {
        yield {
          total, 
          count, 
          scaleDetails
        }
      }
    }
  }
  private static * generateScales(count: number, exercise: Exercise): any {
    const total = exercise.scales.length;
    const selections = new Set<number>();
    for(let index = 0; index < count; ++index) {
      let selection: number;
      while(true) {
        selection = Math.random() * total;
        if (!selections.has(selection)) break;
      }
      selections.add(selection);
      yield { index: index, scale: exercise.scales[selection] };
    }
  }
}
