import storeFactory from './store';
import {
  addDay,
  removeDay,
  setGoal,
  addError,
  removeError,
} from './store/actions';

const store = storeFactory();

store.dispatch(addDay('Ms pu', 'Snowbird'));
store.dispatch(removeDay('23-11-2013'));
store.dispatch(setGoal(8));
store.dispatch(addError('something went wrong'));
store.dispatch(removeError(1));
