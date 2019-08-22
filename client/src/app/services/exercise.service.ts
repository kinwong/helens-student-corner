import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Exercise } from '../models/models';
import { exercises } from '../models/course-definition';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends EntityCollectionServiceBase<Exercise> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Exercise', serviceElementsFactory);
    this.addAllToCache(exercises);
  }
}



