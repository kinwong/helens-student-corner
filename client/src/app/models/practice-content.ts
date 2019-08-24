import { Course, Scale, Exercise } from './models';
import { Speaker } from './speaker';
import * as FromPref from '../reducers/pref.reducer';

export interface PracticeContent {
  course: Course;
  speaker: Speaker;
  pref: FromPref.State;
  exercises: ExerciseContent[];
}

export interface ExerciseContent {
  exercise: Exercise;
  scales: Scale[];
}
