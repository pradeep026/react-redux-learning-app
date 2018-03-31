import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import * as courseActions from '../../actions/courseActions';

describe(`Store works as expected`, () => {

  it(`Store updates when courseActions dispatch`, () =>{
    const intialState = { courses: [] };
    const store = createStore(rootReducer, intialState);
    const courseA = { title: 'TEST' };

    // Actions
    const action = courseActions.createCourse(courseA);
    store.dispatch(action);

    const newState = store.getState();
    const { courses } = newState;

    //Assertion
    expect(courses.length).toBe(1);
    expect(courses[0]).toEqual(courseA);
  });
});
