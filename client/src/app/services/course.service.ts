import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { courses } from '../models/course-definition';
import { Course } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Course', serviceElementsFactory);
    this.addAllToCache(courses);
  }
}
