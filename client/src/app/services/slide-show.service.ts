import { Injectable } from '@angular/core';
import { SettingsService, Settings } from './settings.service';
import { speakers } from 'src/api';
import { AudioConfig, AudioEncoding, VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import * as lodash from 'lodash';
import { Course, Exercise, Sentence } from 'src/api/models';

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
  /**
   * Compiles the model into a slide show.
   */
  toSlideShow(model: Settings): SlideShow {
    let voice = model.speaker.voice;
    if (!voice) {
      voice = speakers[Math.floor(Math.random() * 4.0)].voice;
    }
    const config: AudioConfig = {
      audioEncoding: AudioEncoding.MP3,
      speakingRate: model.speed
    };
    const course = model.courses.find(course => course.name === model.selectedCourseName);
    const slides = Array.from(
      this.courseToSlides(course));

    return <SlideShow>{
      config,
      voice,
      title: course.name,
      slides: slides,
    }
  }
  private * courseToSlides(course: Course): IterableIterator<Slide> {

    for (let greeting of course.greetings) {
      yield <Slide>{
        text: greeting,
        speech: toSsml(greeting),
      }
    }
    for (let slide of exercisesToSlides(course.exercises)) {
      slide.delay = 3;
      yield slide;
    }
    for (let valediction of course.valedictions) {
      yield <Slide>{
        text: valediction,
        speech: toSsml(valediction),
      }
    }
  }
}

function* exercisesToSlides(exercises: Exercise[]): IterableIterator<Slide> {

  for (let exercise of exercises) {
    const total = exercise.scales.length;
    const count = lodash.floor(exercise.ratio * total);

    for (let slide of exerciseToSlides(count, exercise)) {
      yield slide;
    }
  }
}
function* exerciseToSlides(total: number, exercise: Exercise): IterableIterator<Slide> {

  yield sentenceToSlide(exercise.instruction);

  const totalScales = exercise.scales.length;

  const selections = new Set<number>();
  for (let index = 0; index < total; ++index) {
    let selection: number;
    while (true) {
      selection = Math.floor(Math.random() * totalScales);
      if (!selections.has(selection)) break;
    }
    
    selections.add(selection);
    yield sentenceToSlide(
      exercise.scales[selection], total, index);
  };
}
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

