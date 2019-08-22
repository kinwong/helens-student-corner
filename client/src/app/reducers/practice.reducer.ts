import * as lodash from 'lodash';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

import * as PracticeActions from '../actions/practice.actions';
import { courses } from '../models/course-definition';

enum GroupState { All, Some, None }
function checkSetState(set: ExerciseSet): GroupState {
  if (!set) { return GroupState.None; }
  const activations = set.exerciseActivations;
  let all = true;
  let none = true;
  for (const exerciseName in activations) {
    if (!activations[exerciseName]) {
      all = false;
    } else {
      none = false;
    }
  }
  if (all) { return GroupState.All; }
  if (none) { return GroupState.None; }
  return GroupState.Some;
}

function activateAllExercises(set: ExerciseSet, state: boolean): void {
  const activations = set.exerciseActivations;
  // tslint:disable-next-line: forin
  for (const exerciseName in activations) {
    activations[exerciseName] = state;
  }
}

export interface State {
  selectedCourseName: string;
  showTableOfContent: boolean;
  exerciseSets: ExerciseSet[];
}

export interface ExerciseSet {
  courseName: string;
  exerciseActivations: {};
}

function toSelectedExercise(names: string[]): any {
  const result = {};
  for (const name of names) {
    result[name] = true;
  }
  return result;
}

const initialState: State = {
  selectedCourseName: courses[0].name,
  showTableOfContent: false,

  exerciseSets: courses.map(
    course => <ExerciseSet>{
      courseName: course.name,
      exerciseActivations: toSelectedExercise(course.exerciseNames),
    }),
};
const prefReducer = createReducer(
  initialState,
  on(
    PracticeActions.selectCourse,
    (state, { courseName }) => ({
      ...state, selectedCourseName: courseName
    })),

  on(
    PracticeActions.selectExercise,
    (state, { course, exercise, selected }) => {

      const newState: State = lodash.cloneDeep(state);
      const set = newState.exerciseSets.find(option => option.courseName === course.name);
      if (set) {
        set.exerciseActivations[exercise.name] = selected;
      }
      return newState;
    }),
  on(
    PracticeActions.showTableOfContent,
    (state, { show }) => ({
      ...state, showTableOfContent: show
    })),
  on(
    PracticeActions.toggleAllExerciseActivations,
    state => {
      const newState: State = lodash.cloneDeep(state);
      const selectedSet = newState.exerciseSets.find(set => set.courseName === newState.selectedCourseName);
      if (selectedSet) {
        const groupState = checkSetState(selectedSet);
        switch (groupState) {
          case GroupState.All:
              activateAllExercises(selectedSet, false);
          break;

          case GroupState.None:
              activateAllExercises(selectedSet, true);
            break;

          case GroupState.Some:
              activateAllExercises(selectedSet, true);
            break;
          default:
              activateAllExercises(selectedSet, true);
            break;
        }
      }
      return newState;
    }),
  on(
    PracticeActions.toggleExerciseActivation,
    (state, { exerciseName }) => {
      const newState: State = lodash.cloneDeep(state);
      const selectedSet = newState.exerciseSets.find(set => set.courseName === newState.selectedCourseName);
      if (selectedSet) {
        if (exerciseName in selectedSet.exerciseActivations) {
          const activation: boolean = selectedSet.exerciseActivations[exerciseName];
          selectedSet.exerciseActivations[exerciseName] = !activation;
        }
      }
      return newState;
    }),
);

export function reducer(state: State | undefined, action: Action) {
  return prefReducer(state, action);
}
export const featureName = 'practice';
export const selectFeature = createFeatureSelector<State>(featureName);

// === Practice ===
export const selectSelectedCourseName = createSelector(selectFeature, state => state.selectedCourseName);
export const selectShowTableOfContent = createSelector(selectFeature, state => state.showTableOfContent);
export const selectExerciseSets = createSelector(selectFeature, state => state.exerciseSets);

export const selectSelectedCourseExerciseSet = createSelector(selectFeature,
  state => state.exerciseSets.find(set => set.courseName === state.selectedCourseName));

export const selectSelectedCourseExerciseActive =
  createSelector(
    selectSelectedCourseExerciseSet,
    (set: ExerciseSet, props: { exerciseName: string }) => {
      if (!set) { return false; }
      return set.exerciseActivations[props.exerciseName];
    });

export const selectSelectedCourseExerciseAllActive =
  createSelector(
    selectSelectedCourseExerciseSet,
    (set: ExerciseSet) => checkSetState(set) === GroupState.All);

export const selectSelectedCourseExerciseSomeActive =
  createSelector(
    selectSelectedCourseExerciseSet,
    (set: ExerciseSet) => checkSetState(set) === GroupState.Some);
