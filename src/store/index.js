import C from '../constants';
import appReducer from '../store/reducers';
import { createStore, applyMiddleware } from 'redux';

const consoleMessage = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action ${action.type}`);
  console.log('ski days', store.getState().allSkiDays.length);

  result = next(action); // where action get dispatch and change to state

  const { allSkiDays, goal, errors, resortNames } = store.getState();
  console.log(
    `allSkiDays ${allSkiDays.length}
     goal ${goal}
     error ${errors.length}
     fetching ${resortNames.fetching}
     suggestion ${resortNames.suggestions}
     `,
  );
  console.groupEnd();
  return result;
};

export default function(initialState = {}) {
  return applyMiddleware(consoleMessage)(createStore)(appReducer, initialState);
}
