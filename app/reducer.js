'use strict';

import {
  INCREMENT,
  DECREMENT,
  RESET,
  UPDATE_POSTS,
  // SAGA_INCREMENT,
  // SAGA_DECREMENT,
} from '/app/action.js';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // case SAGA_INCREMENT:
      return state + action.payload;
    case DECREMENT:
      // case SAGA_DECREMENT:
      return state - action.payload;
    case RESET:
      return action.payload;
    default:
      return state;
  }
};

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.payload;
    default:
      return state;
  }
};
