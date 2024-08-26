'use strict';

import cfg from '/config.js';
import { NavBar } from '/components/NavBar/NavBar.js';

const { createElement: create, Fragment } = React;
const { Link, useParams } = ReactRouterDOM;

export default () => {
  const { pageId } = useParams();

  return create(
    Fragment,
    {},
    create('div', { style: { textAlign: 'center' } }, 'Description'),
    create(NavBar, { items: [...cfg.additionalPages, ...cfg.nestedPages] }),
    create(
      'div',
      {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      create('div', {}, `Nested page ${pageId}`),
      create(Link, { to: '/' }, 'To Home')
    )
  );
};
