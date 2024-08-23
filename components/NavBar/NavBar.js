'use strict';

import { cfg } from '/config.js';
import { appendStyle } from '/utils/common.js';

appendStyle('/components/NavBar/NavBar.css');

const { createElement: create } = React;
const { Link } = ReactRouterDOM;

export const NavBar = () => {
  return create(
    'nav',
    { className: 'nav-bar' },
    ...cfg.navItems.map((item) =>
      create(Link, { className: 'nav-bar__link', to: item.href }, item.text)
    ),
    ...cfg.serviceNavItems.map((item) =>
      create(Link, { className: 'nav-bar__link', to: item.href }, item.text)
    )
  );
};
