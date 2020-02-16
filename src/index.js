import C from './constants';
import { allSkiDays, goal } from './initialState.json';

console.log(`
    Ski day counter
    ======
    The goal is ${goal} day
    Innitale there are ${allSkiDays.length} ski day
    ==== Constants action ===
    ${Object.keys(C).join('\n   ')}
`);
//Object.key(C): return a array
