import { createAction, props } from '@ngrx/store';
import { Course, Exercise } from '../models/models';

export const selectCourse = createAction(
  '[Practice] Select Course',
  props<{ course: Course }>());

export const selectExercise = createAction(
  '[Practice] Select Exercise', props<{course: Course, exercise: Exercise, selected: boolean }>());

export const showTableOfContent = createAction(
  '[Practice] Show Table of Content',
  props<{show: boolean}>());

