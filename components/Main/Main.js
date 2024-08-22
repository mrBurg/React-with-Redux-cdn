'use strict';

import { appendStyle } from '/utils/common.js';
import { items } from '/components/NavBar/NavBar.js';

appendStyle('/components/Main/Main.css');

const { createElement } = React;
const { Route, Switch, Redirect } = ReactRouterDOM;

export const Main = () =>
  createElement(
    'main',
    { className: 'main' },
    createElement(
      Switch,
      null,
      createElement(Redirect, { from: '/redirect', to: '/' }),
      ...items.map((item) =>
        createElement(
          Route,
          { path: item.href, exact: item.exact },
          item.component
        )
      )
      // createElement(Redirect, { to: '/' })
    )
  );
