import C from '../constants';

export const addDay = (resort, date, powder = false, backcountry = false) => {
  return {
    type: C.ADD_DAY,
    payload: { resort, date, powder, backcountry },
  };
};

export const removeDay = date => {
  return {
    type: C.REMOVE_DAY,
    payload: date,
  };
};

export const setGoal = goal => {
  return {
    type: C.SET_GOAL,
    payload: goal,
  };
};

export const addError = error => ({
  type: C.ADD_ERROR,
  payload: error,
});

export const removeError = index => ({
  type: C.CLEAR_ERROR,
  payload: index,
});
