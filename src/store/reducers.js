import C from '../constants';
import { combineReducers } from 'redux';
//if initialstate is object
// function goal(initialState, action) {
//   if (action.type === C.SET_GOAL) {
//     return action.payload;
//   } else if (action.type === C.ADD_DAY) {
//     return action.payload;
//   } else {
//     return initialState;
//   }
// }

export const error = (preState = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...preState, action.payload];
    case C.CLEAR_ERROR:
      return preState.filter((i, message) => i !== action.payload);
    default:
      return;
      preState;
  }
};

export const addAllSkiDay = (preState = [], action) => {
  switch (action.type) {
    case C.ADD_DAY:
      return [...preState, action.payload];
    case C.REMOVE_DAY:
      return preState.filter(skiDay => skiDay.date !== action.payload);
    default:
      return preState;
  }
};

export const suggestions = (preState = [], action) => {
  switch (action.type) {
    case C.CHANGE_SUGGESTION:
      return action.payload;
    case C.CLEAR_SUGGESTION:
      return [];
    default:
      return preState;
  }
};

export default combineReducers({
  //   goal,
  addAllSkiDay,
  resortName: combineReducers({
    suggestions,
  }),
});
