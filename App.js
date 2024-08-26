'use strict';

import cfg from '/config.js';
import { prependStyle } from '/utils/files.js';
import { Header } from '/components/Header/Header.js';
import { Main } from '/components/Main/Main.js';
import { Footer } from '/components/Footer/Footer.js';
import { NotFound } from '/components/NotFound/NotFound.js';

prependStyle('/App.css');

const { createElement: create, lazy, Suspense } = React;
const { HashRouter /* BrowserRouter */, Switch, Redirect, Route, useLocation } =
  ReactRouterDOM;

const Content = () => {
  const route = useLocation();
  const { component } = _.find(
    cfg.mainPages,
    (item) => item.href == route.pathname
  );

  return create(
    Suspense,
    { fallback: create('div', { className: 'loading' }, 'Loading...') },
    null,
    create(
      lazy(() => import(`/pages/${component}`))
      // lazy(() =>
      //   new Promise((resolve) => {
      //     const data = import(`/pages/${component}`);

      //     setTimeout(() => resolve(data), 500);
      //   }).then((data) => data)
      // )
    )
  );
};

const NestPage = () =>
  create(
    Suspense,
    { fallback: create('div', { className: 'loading' }, 'Loading...') },
    null,
    create(lazy(() => import('/pages/nest-page.js')))
  );

export const App = () =>
  create(
    HashRouter, // BrowserRouter
    null,
    create(
      Switch,
      null,
      create(Redirect, { from: '/redirect', to: '/' }),
      create(
        Route,
        { path: '/page/:pageId', exact: true },
        create(Header),
        create(Main, null, create(NestPage)),
        create(Footer)
      ),
      cfg.mainPages.map((item) =>
        create(
          Route,
          { key: item.href, path: item.href, exact: item.exact },
          create(Header),
          create(Main, null, create(Content)),
          !item.noFooter && create(Footer)
        )
      ),
      create(Route, { path: '*' }, create(Main, null, create(NotFound)))
    )
  );
