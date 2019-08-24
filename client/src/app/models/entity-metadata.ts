import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Course, Exercise } from './models';

export function selectCourseId(course: Course) { return course.name; }
export function selectExerciseId(exercise: Exercise) { return exercise.name; }
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    Course: {
      selectId: selectCourseId
    },
    Exercise: {
      selectId: selectExerciseId
    }
  }
};


