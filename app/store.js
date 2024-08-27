'use strict';

import { counterReducer, postsReducer } from '/app/reducer.js';
// import { logger } from '/app/middleware.js';

const { createStore, combineReducers, applyMiddleware, compose } = Redux;

export const store = createStore(
  combineReducers({ counter: counterReducer, posts: postsReducer }),
  {},
  compose(
    applyMiddleware(/* logger, */ ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
