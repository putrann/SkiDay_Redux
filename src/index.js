import C from './constants';
import goal, { error } from './store/reducers';

const initialState = null;

//   type: C.ADD_DAY,
//   payload: {
//     resort: 'puchan',
//     date: '2020-2-7',
//     powder: true,
//     backcountry: false,
//   },

const initialState2 = ['error ', 'not connect', 'server is die'];
const action = {
  type: C.ADD_ERROR,
  payload: 'server is die hihi',
};

// const nextState = goal(initialState, action);
const nextState2 = error(initialState2, action);

console.log(`
 initial goal: ${initialState2}
 action: ${JSON.stringify(action)}
 newgoal: ${JSON.stringify(nextState2)}
`);
// ${Object.keys(C).join('\n   ')}
//Object.key(C): return a array
