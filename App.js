'use strict';

import { prependStyle } from '/utils/common.js';
import { Header } from '/components/Header/Header.js';
import { Main } from '/components/Main/Main.js';
import { Footer } from '/components/Footer/Footer.js';

prependStyle('/App.css');

const { createElement: create, lazy, Suspense, useCallback } = React;
const { BrowserRouter, Switch, Redirect, Route } = ReactRouterDOM;
const { useSelector } = ReactRedux;

export const App = () => {
  const state = useSelector((state) => state);
  console.log('App', state);

  const navItems = useSelector((state) => state.navbar.navItems);

  const loadComponent = useCallback((componentName) => {
    switch (componentName) {
      case 'HomePage':
        return lazy(() => import('/pages/index.js'));

      case 'CanvasPage':
        return lazy(() => import('/pages/canvas.js'));

      case 'CounterPage':
        return lazy(() => import('/pages/counter.js'));

      default:
        return () => null;
      // throw new Error(`Component ${componentName} not found`);
    }
  }, []);

  return create(
    BrowserRouter,
    null,
    create(
      Switch,
      null,
      create(Redirect, { from: '/redirect', to: '/' }),
      ...navItems.map((item) => {
        const Page = loadComponent(item.component);

        return create(
          Route,
          { path: item.href, exact: item.exact },
          create(Header),
          create(
            Main,
            null,
            create(
              Suspense,
              { fallback: create('div', null, 'Loading...') },
              create(Page)
            )
          ),
          !item.noFooter && create(Footer)
        );
      })
    )
  );
};
