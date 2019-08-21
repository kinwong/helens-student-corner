import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Course } from 'src/app/models/models';
import { courses } from 'src/app/models/course-definition';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Course', serviceElementsFactory);
    this.addAllToCache(courses);
  }
}
