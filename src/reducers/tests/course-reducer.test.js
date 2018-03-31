import React from 'react';
import expect from 'expect';
import courseReducer from '../courseReducer';
import * as actions from '../../actions/courseActions';


describe(`courseReducer works as expected`, () => {
  it(`courseReducer adds new course to store`, () => {
    const intialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourseAction = actions.createCourse({ title: 'C'});

    const state = courseReducer(intialState, newCourseAction);

    // Assertion
    expect(state.length).toBe(3);
    expect(state[0].title).toBe('A');
    expect(state[1].title).toBe('B');
    expect(state[2].title).toBe('C');
  });

  it(`courseReducer updates a course`, () => {
    const intialState = [
      {title: 'A'},
      {title: 'B'},
      {title: 'C'}
    ];

    const state = courseReducer(intialState, {});
    const updateStateAction = actions.updateCourse(state[2][`title`] = 'D');
    const newState = courseReducer(intialState, updateStateAction);
    // Assertion
    expect(newState.length).toBe(3);
    expect(newState[2].title).toBe('D');
  });
});
