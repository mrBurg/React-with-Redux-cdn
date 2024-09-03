'use strict';

export const INCREMENT_ACTION = '@@counter/INCREMENT_ACTION';
export const DECREMENT_ACTION = '@@counter/DECREMENT_ACTION';

export const SAGA_INCREMENT = '@@counter/SAGA_INCREMENT';
export const SAGA_INCREMENT_ACTION = '@@counter/SAGA_INCREMENT_ACTION';

export const SAGA_DECREMENT = '@@counter/SAGA_DECREMENT';
export const SAGA_DECREMENT_ACTION = '@@counter/SAGA_DECREMENT_ACTION';

export const RESET_ACTION = '@@counter/RESET_ACTION';

export const increment = (payload = 1) => ({ type: INCREMENT_ACTION, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT_ACTION, payload });
export const sagaIncrement = (payload = 1) => ({
  type: SAGA_INCREMENT,
  payload,
});
export const sagaDecrement = (payload = 1) => ({
  type: SAGA_DECREMENT,
  payload,
});
export const reset =
  (data = 0) =>
  async (dispatch /* getState */) => {
    // const { counter } = getState();

    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      dispatch({ type: RESET_ACTION, payload: data });
    });
  };

export const UPDATE_POSTS_ACTION = '@posts/UPDATE_POSTS_ACTION';

export const updatePosts = (payload) => ({
  type: UPDATE_POSTS_ACTION,
  payload,
});
