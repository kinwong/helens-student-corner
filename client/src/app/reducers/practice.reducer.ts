import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { courses } from 'src/app/models/course-definition';
import * as PracticeActions from '../actions/practice.actions';
import * as lodash from 'lodash';

export interface ExerciseSet {
  courseName: string;
  selectedExercises: Set<string>;
}

export interface State {
  selectedCourseName: string;
  showTableOfContent: boolean;
  exerciseSets: ExerciseSet[];
}

const initialState: State = {
  selectedCourseName: courses[0].name,
  showTableOfContent: false,

  exerciseSets: courses.map(
    course => <ExerciseSet>{
      courseName: course.name,
      selectedExercises: new Set<string>(...course.exerciseNames),
    }),
};

const prefReducer = createReducer(
  initialState,
  on(
    PracticeActions.selectCourse,
    (state, {course}) => ({
    ...state, selectedCourse: course.name
  })),

  on(
    PracticeActions.selectExercise,
    (state, { course, exercise, selected }) => {

      const newState: State = lodash.cloneDeep(state);
      const set = newState.exerciseSets.find(option =>  option.courseName === course.name);
      if (set) {
        if (selected) {
          set.selectedExercises.add(exercise.name);
        } else {
          set.selectedExercises.delete(exercise.name);
        }
      }
      return newState;
    }),
  on(
    PracticeActions.showTableOfContent,
    (state, {show}) => ({
    ...state, showTableOfContent: show
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return prefReducer(state, action);
}
export const featureName = 'practice';
export const selectFeature = createFeatureSelector<State>(featureName);

// === Practice ===
export const selectSelectedCourseName =  createSelector(selectFeature, state => state.selectedCourseName);
export const selectShowTableOfContent =  createSelector(selectFeature, state => state.showTableOfContent);
export const selectExerciseSet =  createSelector(selectFeature, state => state.exerciseSets);
