import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { Course, Exercise } from '../course-definition';
import { speakers } from 'src/api';
import { AudioConfig, AudioEncoding, VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import * as lodash from 'lodash';

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
    private _settings: SettingsService) {
  }

  toSlideShow(course: Course): SlideShow {
    let voice = this._settings.settings.speaker.voice;
    if (voice === undefined) {
      voice = speakers[Math.floor(Math.random() * 4.0)].voice;
    }
    const config: AudioConfig = {
      audioEncoding: AudioEncoding.MP3,
      speakingRate: this._settings.settings.speed
    };
    const slides = Array.from(
      this.generateSlides(voice, config, course));

    return <SlideShow>{
      config,
      voice,
      title: course.name,
      slides: slides,
    }
  }
  private * generateSlides(
    voice: VoiceSelectionParams,
    config: AudioConfig,
    course: Course): IterableIterator<Slide> {

    for (let greeting of course.greetings) {
      yield <Slide>{
        text: greeting,
        speech: toSsml(greeting),
      }
    }
    for (let exercise of generateExercises(course)) {
      yield <Slide>{
        total: exercise.total,
        index: exercise.index,
        text: exercise.text,

      }
    }

    for (let valediction of course.valedictions) {
      yield <Slide>{
        text: valediction,
        speech: toSsml(valediction),
      }
    }
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
function toSsml(text: string) {
  return `<speak>${text}</speak>`;
}
