'use strict';

import { INCREMENT, DECREMENT, UPDATE_POSTS } from '/app/action.js';

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

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.payload;
    default:
      return state;
  }
};
