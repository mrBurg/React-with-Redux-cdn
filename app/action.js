'use strict';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

export const increment = (payload = 1) => ({ type: INCREMENT, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT, payload });

export const UPDATE_POSTS = 'posts/update';

export const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload });

/* export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
      });
  };
}; */
