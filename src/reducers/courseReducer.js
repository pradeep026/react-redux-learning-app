import actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action){
  const { type } = action;
  switch (type) {
    case actionTypes.CREATE_COURSE:
      // returns new Object / Array, which make sures immutable
      console.info(' INFO :: CREATE_COURSE Reducer :: type ', type);
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case actionTypes.UPDATE_COURSE:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case actionTypes.GET_ALL_COURSES:
      console.info(' INFO :: GET_ALL_COURSES Reducer :: type ', type, ' courses length :: ', action.courses);
      return [
        ...state,
        ...action.courses
      ];
    default:
      return state;

  }
}
