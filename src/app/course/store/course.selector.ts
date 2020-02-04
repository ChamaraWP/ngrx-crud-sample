import { CourseState } from './course.reducer';
import { Course } from './../model/course.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './course.reducer';

export const courseFeatureSelector = createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(courseFeatureSelector,selectAll);

export const areCoursesLoaded = createSelector(courseFeatureSelector,state => state.coursesLoaded);