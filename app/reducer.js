'use strict';

import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  RESET_ACTION,
  UPDATE_POSTS_ACTION,
  SAGA_INCREMENT_ACTION,
  SAGA_DECREMENT_ACTION,
  BLOCK_BUTTONS_ACTION,
} from '/app/action.js';

export const counterReducer = (
  state = { value: 0, disabled: false },
  action
) => {
  switch (action.type) {
    case INCREMENT_ACTION:
    case SAGA_INCREMENT_ACTION:
      return { ...state, value: state.value + action.payload };
    case DECREMENT_ACTION:
    case SAGA_DECREMENT_ACTION:
      return { ...state, value: state.value - action.payload };
    case RESET_ACTION:
      return { ...state, value: action.payload };
    case BLOCK_BUTTONS_ACTION:
      return { ...state, disabled: action.payload };
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
