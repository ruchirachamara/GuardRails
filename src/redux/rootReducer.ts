import { combineReducers } from 'redux';

import { reducer as repoReducer } from './home';

const rootReducer = combineReducers({
    repos: repoReducer,
});

export default rootReducer;
