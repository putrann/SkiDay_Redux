import C from './constants';
import goal, { error, addAllSkiDay } from './store/reducers';

const initialState2 = ['error ', 'not connect', 'server is die'];
const action = {
  type: C.ADD_ERROR,
  payload: 'server is die hihi',
};

const preState = [
  {
    resort: 'puchan',
    date: '2020-2-7',
    powder: true,
    backcountry: false,
  },
];

const actionAdd = {
  type: C.ADD_DAY,
  payload: {
    resort: 'phuong tran',
    date: '2020-6-7',
    powder: false,
    backcountry: true,
  },
};

// const nextState = goal(initialState, action);
const nextState2 = error(initialState2, action);
const nextStateAdd = addAllSkiDay(preState, actionAdd);

console.log(`
initialState:${JSON.stringify(preState)}
 action: ${JSON.stringify(actionAdd)}
 newgoal: ${JSON.stringify(nextStateAdd)}
`);
// ${Object.keys(C).join('\n   ')}
//Object.key(C): return a array
