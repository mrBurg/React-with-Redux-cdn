'use strict';

import { reducer, navbarReducer } from '/app/reducer.js';

const { createStore, combineReducers } = Redux;

export const store = createStore(
  combineReducers({ counter: reducer, navbar: navbarReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
