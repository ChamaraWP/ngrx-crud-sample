import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseResolver } from './course/course.resolver';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoursesListComponent } from './course/components/courses-list/courses-list.component';
import { CreateCoursesComponent } from './course/components/create-courses/create-courses.component';
import { RouterModule } from '@angular/router';
import { CourseModule } from './course/course.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    resolve: {
      courses: CourseResolver
    }
  },
  {path: 'create-course', component: CreateCoursesComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CourseModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
