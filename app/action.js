'use strict';

export const INCREMENT = '@@counter/INCREMENT';
export const DECREMENT = '@@counter/DECREMENT';
export const SAGA_INCREMENT = '@@counter/SAGA_INCREMENT';
export const SAGA_INCREMENT_EVENT = '@@counter/SAGA_INCREMENT_EVENT';
export const SAGA_DECREMENT = '@@counter/SAGA_DECREMENT';
export const SAGA_DECREMENT_EVENT = '@@counter/SAGA_DECREMENT_EVENT';
export const RESET = '@@counter/RESET';

export const increment = (payload = 1) => ({ type: INCREMENT, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT, payload });
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
  async (dispatch, getState) => {
    const { counter } = getState();

    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      dispatch({ type: RESET, payload: counter - counter });
    });
  };

/* export const sagaIncrement = (payload = 1) => ({
  type: SAGA_INCREMENT,
  payload,
}); */

export const UPDATE_POSTS = '@posts/UPDATE';

export const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload });
