import { createAction, props } from '@ngrx/store';
import { Course, Exercise } from '../models/models';

export const selectCourse = createAction(
  '[Practice] Select Course',
  props<{ courseName: string }>());

export const selectExercise = createAction(
  '[Practice] Select Exercise', props<{course: Course, exercise: Exercise, selected: boolean }>());

export const showTableOfContent = createAction(
  '[Practice] Show Table of Content',
  props<{show: boolean}>());

export const toggleExerciseActivation = createAction(
    '[Practice] Toggle Exercise Activation',
    props<{exerciseName: string}>());
