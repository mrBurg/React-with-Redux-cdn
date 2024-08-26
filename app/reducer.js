'use strict';

import { INCREMENT, DECREMENT, UPDATE_USERS } from '/app/action.js';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return action.payload;
    default:
      return state;
  }
};
