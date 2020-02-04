import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { courseReducer } from './store/course.reducer';
import { CourseEffects } from './store/course.effects';
import { CourseServiceService } from './service/course-service.service';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CreateCoursesComponent } from './components/create-courses/create-courses.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoursesListComponent,CreateCoursesComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects])

  ],
  providers: [CourseServiceService],
  exports: [CoursesListComponent, CreateCoursesComponent]
})
export class CourseModule { }
