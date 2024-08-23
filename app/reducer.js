'use strict';

import { INCREMENT, DECREMENT } from '/app/action.js';

const initialState = { counter: 0, data: 'Data' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const navbarInitialState = {};

export const navbarReducer = (state = navbarInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
