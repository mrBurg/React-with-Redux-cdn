'use strict';

export const INCREMENT = '@@counter/INCREMENT';
export const DECREMENT = '@@counter/DECREMENT';
export const RESET = '@@counter/RESET';

export const increment = (payload = 1) => ({ type: INCREMENT, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT, payload });

export const reset =
  (data = 0) =>
  async (dispatch, _getState) => {
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      dispatch({ type: RESET, payload: data });
    });
  };

export const UPDATE_POSTS = '@posts/UPDATE';

export const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload });
