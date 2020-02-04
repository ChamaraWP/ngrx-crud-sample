import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('/api/courses', course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete('/api/courses/' + courseId);
  }

  updateCourse(courseId: string | number, changes: Partial<Course>): Observable<any> {
    return this.http.put('/api/courses/' + courseId, changes);
  }
}
