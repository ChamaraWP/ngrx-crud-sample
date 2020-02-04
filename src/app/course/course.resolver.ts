import { areCoursesLoaded } from './store/course.selector';
import { loadCourses, coursesLoaded } from './store/course.action';
import { State } from './../store/reducers/index';
import { Course } from './model/course.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areCoursesLoaded),
        tap((coursesLoaded) => {
          if (!coursesLoaded) {
            this.store.dispatch(loadCourses());
          }

        }),
        filter(coursesLoaded => coursesLoaded),
        first()
    );
  }
}