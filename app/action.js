'use strict';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

export const increment = (payload = 1) => ({ type: INCREMENT, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT, payload });
