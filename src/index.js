import C from './constants';
import storeFactory from './store';

const initialState = localStorage['redux-store']
  ? JSON.parse(localStorage['redux-store'])
  : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  console.log('object');
  localStorage['redux-store'] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-10-28',
    powder: false,
    backcountry: true,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Pu',
    date: '2016-4-28',
    powder: true,
    backcountry: true,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt nguyen',
    date: '2016-10-8',
    powder: true,
    backcountry: false,
  },
});
