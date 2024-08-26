'use strict';

import { prependStyle } from '/utils/files.js';

prependStyle('/components/NotFound/NotFound.css');

const { createElement: create, Fragment } = React;
const { Link } = ReactRouterDOM;

export const NotFound = () =>
  create(
    'div',
    { className: 'not-found' },
    create('div', null, 'Page Not Found'),
    create(Link, { to: '/' }, 'To Home')
  );
