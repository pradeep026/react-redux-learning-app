import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import CourseListComponent from '../course-list';

const initializeComponent = (props) => mount(<CourseListComponent {...props} />);

const element = (__component, selector) => __component.find(`${selector}`);

const dummyCourse = (i, value, len) => {
  return {
    id: i,
    title: value,
    authorId: value,
    category: value,
    length: len
  };
};

it(`course list is empty row when courses is empty`, ()=> {
  const courses = [];
  const editCourseHandler = () => {};

  const props = {
    courses,
    editCourseHandler
  };

  const component = initializeComponent(props);

  // Assertion
  expect(element(component, 'div.course--list-item').length).toEqual(courses.length);
});

it(`courses are rendered as list`, ()=> {
  const courses = [
    dummyCourse(0, 'A', '1.00'),
    dummyCourse(1, 'B', '2.00'),
    dummyCourse(2, 'C', '3.00'),
    dummyCourse(3, 'D', '4.00')
  ];
  const editCourseHandler = () => {};

  const props = {
    courses,
    editCourseHandler
  };

  const component = initializeComponent(props);

  // Assertion
  expect(element(component, 'div.course--list-item').length).toEqual(courses.length);
});
