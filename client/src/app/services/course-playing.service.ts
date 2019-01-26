import { Injectable } from '@angular/core';
import { TextToSpeechService, MediaControl } from './google/text-to-speech.service';
import { Observable, concat } from 'rxjs';
import { Course } from '../course-definition';
import lodash from 'lodash';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import { tap } from 'rxjs/operators';

export interface Playback {
  voice: VoiceSelectionParams;
  course: Course;
  onSubtitle: (subtitle: string) => void;
}

@Injectable({
  providedIn: 'root'
})
export class CoursePlayingService {

  constructor(private _speech: TextToSpeechService) { }
  private static shuffle(texts: string[], count: number): string[] {
    return texts;
  }

  public play(playback: Playback): Observable<MediaControl> {
    const course = playback.course;

    const greetings = course.greetings.map(greeting => this.read(playback, greeting));
    const scales = lodash.flatMap(course.exercises, exercise => {
      const count = exercise.scales.length = 4;
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
      .pipe(tap(x => playback.onSubtitle(text)));
  }
}
