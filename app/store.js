'use strict';

import { reducer } from '/app/reducer.js';

const { createStore } = Redux;

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
