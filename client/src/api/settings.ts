import { Course } from './models';
import { Speaker } from './speaker';

export interface Settings {
  speaker: Speaker;
  showSubtitle: boolean;
  speed: number;
  metronome: boolean;

  showContent: boolean;
  courses: Course[];
  selectedCourseName: string;
}

