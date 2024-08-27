'use strict';

import cfg from '/config.js';
import { prependStyle } from '/utils/files.js';
import { Header } from '/components/Header/Header.js';
import { Main } from '/components/Main/Main.js';
import { Footer } from '/components/Footer/Footer.js';
import { NotFound } from '/components/NotFound/NotFound.js';

prependStyle('/App.css');

const { createElement: create, lazy, Suspense } = React;
const { HashRouter /* BrowserRouter */, Switch, Redirect, Route } =
  ReactRouterDOM;

const Content = ({ component }) =>
  create(
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

export const App = () =>
  create(
    HashRouter, // BrowserRouter
    null,
    create(
      Switch,
      null,
      create(Redirect, { from: '/redirect', to: '/' }),
      [...cfg.nestPages, ...cfg.mainPages].map(
        ({ path, exact, component, noFooter }) =>
          create(
            Route,
            { key: path, path, exact },
            create(Header),
            create(Main, null, create(Content, { component })),
            !noFooter && create(Footer)
          )
      ),
      create(Route, { path: '*' }, create(Main, null, create(NotFound)))
    )
  );
