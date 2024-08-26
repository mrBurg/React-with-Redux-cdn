'use strict';

import { reducer, navbarReducer } from '/app/reducer.js';

const { createStore, combineReducers, applyMiddleware, compose } = Redux;

// console.log(ReduxThunk);

/* function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
} */

export const store = createStore(
  combineReducers({ counter: reducer, navbar: navbarReducer }),
  {},
  compose(
    applyMiddleware(
      // logger,
      ReduxThunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
