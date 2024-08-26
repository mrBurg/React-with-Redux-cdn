'use strict';

import cfg from '/config.js';
import { appendStyle } from '/utils/files.js';
import { NavBar } from '/components/NavBar/NavBar.js';

appendStyle('/components/Header/Header.css');

const { createElement: create } = React;

export const Header = () =>
  create(
    'header',
    { className: 'header' },
    create(NavBar, {
      items: [...cfg.mainPages, ...cfg.additionalPages, ...cfg.serviceNavItems],
    })
  );
