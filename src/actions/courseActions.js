import actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

const createCourse = (course) => {
  const type = actionTypes.CREATE_COURSE;
  return { type , course };
};

const updateCourseAction = (course) => {
  const type = actionTypes.UPDATE_COURSE;
  return { type , course };
};

const getAllCourses = (courses) => {
  const type = actionTypes.GET_ALL_COURSES;
  return { type, courses };
};

export function loadCourses(){
  return (dispatch) =>{
    return courseApi.getAllCourses().then(courses => {
      dispatch(getAllCourses(courses));
    }).catch(err => {
      console.error(' ERROR :: Failed to load courses', ' Error info ', err);
      throw(err);
    });
  };
}


export function updateCourse(course){
  return (dispatch) =>{
    return courseApi.saveCourse(course).then(course => {
      dispatch(updateCourseAction(course));
    }).catch(err => {
      console.error(' ERROR :: Failed to load courses', ' Error info ', err);
      throw(err);
    });
  };
}

export function saveCourse(course){
  return (dispatch) =>{
    return courseApi.saveCourse(course).then(course => {
      dispatch(createCourse(course));
    }).catch(err => {
      console.error(' ERROR :: Failed to load courses', ' Error info ', err);
      throw(err);
    });
  };
}
