'use strict';
export const INCREMENT = '@@INCREMENT';
export const DECREMENT = '@@DECREMENT';

export const increment = (payload = 1) => ({ type: INCREMENT, payload });
export const decrement = (payload = 1) => ({ type: DECREMENT, payload });
