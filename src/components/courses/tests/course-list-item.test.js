import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CourseListItemComponent from '../course-list-item';

const initializeComponent = (props) => shallow(<CourseListItemComponent {...props} />);

const elementText = (__component, selector) => __component.find(`${selector}`).text();

it(`course list component renders`, ()=> {
  const course = {
    id: 1,
    title: 'A',
    authorId: 'B',
    category: 'C',
    length: '1'
  };
  const editCourseHandler = () => {};
  const props = {
    sNo: 1,
    course,
    editCourseHandler
  };
  const component = initializeComponent(props);

  // Assertion
  expect(elementText(component, 'div.course--sno')).toEqual('1');
  expect(elementText(component, 'div.course--title')).toEqual(course.title);
  expect(elementText(component, 'div.course--authorid')).toEqual(course.authorId);
  expect(elementText(component, 'div.course--category')).toEqual(course.category);
  expect(elementText(component, 'div.course--length')).toEqual(course.length);
});
