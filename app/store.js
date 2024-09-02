'use strict';

import { counterReducer, postsReducer } from '/app/reducer.js';
import { rootSaga } from '/app/saga.js';
// import { logger } from '/app/middleware.js';

const { createStore, combineReducers, applyMiddleware, compose } = Redux;
const sagaMiddleware = ReduxSaga.default();

export const store = createStore(
  combineReducers({ counter: counterReducer, posts: postsReducer }),
  {},
  compose(
    applyMiddleware(/* logger, */ ReduxThunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
