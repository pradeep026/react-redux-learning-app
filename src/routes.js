import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home/home' ;
import AboutRoute from './components/about/about' ;
import AddNewCourseForm from './components/courses/add-new-course-form';
import ManageCourses from './components/courses/manage-courses';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/courses" component={ManageCourses} />
    <Route path="/courses/:courseId" component={AddNewCourseForm} />
    <Route path="about" component={AboutRoute} />
  </Route>
);
