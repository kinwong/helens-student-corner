import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Course, Exercise } from './models';

const entityMetadata: EntityMetadataMap = {
  Course: {
    selectId: (course: Course) => course.name
  },
  Exercise: {
    selectId: (exercise: Exercise) => exercise.name
  }
};
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata
};
