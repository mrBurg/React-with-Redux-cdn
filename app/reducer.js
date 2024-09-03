'use strict';

import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  RESET_ACTION,
  UPDATE_POSTS_ACTION,
  SAGA_INCREMENT_ACTION,
  SAGA_DECREMENT_ACTION,
} from '/app/action.js';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
    case SAGA_INCREMENT_ACTION:
      return state + action.payload;
    case DECREMENT_ACTION:
    case SAGA_DECREMENT_ACTION:
      return state - action.payload;
    case RESET_ACTION:
      return action.payload;
    default:
      return state;
  }
};

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS_ACTION:
      return action.payload;
    default:
      return state;
  }
};
