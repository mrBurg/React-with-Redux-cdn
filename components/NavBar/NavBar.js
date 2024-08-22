'use strict';

import { appendStyle } from '/utils/common.js';
import HomePage from '/pages/index.js';
import CanvasPage from '/pages/canvas.js';
import CounterPage from '/pages/counter.js';

appendStyle('/components/NavBar/NavBar.css');

const { createElement } = React;
const { Link } = ReactRouterDOM;

export const items = [
  {
    href: '/',
    text: 'Home',
    exact: true,
    component: createElement(HomePage),
  },
  {
    href: '/canvas',
    text: 'Canvas',
    exact: true,
    component: createElement(CanvasPage),
  },
  {
    href: '/counter',
    text: 'Counter',
    exact: true,
    component: createElement(CounterPage),
  },
  {
    href: '/redirect',
    text: 'Redirect',
  },
];

export const NavBar = () =>
  createElement(
    'nav',
    { className: 'nav-bar' },
    ...items.map((item) =>
      createElement(
        Link,
        { className: 'nav-bar__link', to: item.href },
        item.text
      )
    )
  );
