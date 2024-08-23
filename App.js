'use strict';

import { cfg } from '/config.js';
import { $$, prependStyle } from '/utils/common.js';
import { Header } from '/components/Header/Header.js';
import { Main } from '/components/Main/Main.js';
import { Footer } from '/components/Footer/Footer.js';
import { NotFound } from '/components/NotFound/NotFound.js';

prependStyle('/App.css');

const { createElement: create, lazy, Suspense } = React;
const { BrowserRouter, Switch, Redirect, Route, useLocation } = ReactRouterDOM;

const Content = () => {
  const route = useLocation();
  const { component } = _.find(
    cfg.navItems,
    (item) => item.href == route.pathname
  );

  return create(
    Suspense,
    { fallback: create('div', { className: 'loading' }, 'Loading...') },
    null,
    create(
      // lazy(() => import(`/pages/${component}`))
      lazy(() =>
        new Promise((resolve) => {
          const data = import(`/pages/${component}`);

          setTimeout(() => resolve(data), 500);
        }).then((data) => data)
      )
    )
  );
};

export const App = () =>
  create(
    BrowserRouter,
    null,
    create(
      Switch,
      null,
      create(Redirect, { from: '/redirect', to: '/' }),
      ...cfg.navItems.map((item) =>
        create(
          Route,
          { path: item.href, exact: item.exact },
          create(Header),
          create(Main, null, create(Content)),
          !item.noFooter && create(Footer)
        )
      ),
      create(Route, { path: '/*' }, create(Main, null, create(NotFound)))
    )
  );
