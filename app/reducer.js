'use strict';

import { INCREMENT, DECREMENT } from '/app/action.js';

const initialState = { counter: 0, data: 'Data' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const navbarInitialState = {
  navItems: [
    {
      href: '/',
      text: 'Home',
      component: 'HomePage',
      exact: true,
    },
    {
      href: '/canvas',
      text: 'Canvas',
      component: 'CanvasPage',
      exact: true,
      noFooter: true,
    },
    {
      href: '/counter',
      text: 'Counter',
      component: 'CounterPage',
      exact: true,
    },
    {
      href: '/redirect',
      text: 'Redirect',
      exact: true,
    },
  ],
};

export const navbarReducer = (state = navbarInitialState, action) => {
  switch (action.type) {
    /* case INCREMENT:
      return { ...state, counter: state.counter + action.payload }; */
    default:
      return state;
  }
};
