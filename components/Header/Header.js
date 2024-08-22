'use strict';

import { appendStyle } from '/utils/common.js';
import { NavBar } from '/components/NavBar/NavBar.js';

appendStyle('/components/Header/Header.css');

const { createElement } = React;

export const Header = () =>
  createElement('header', { className: 'header' }, createElement(NavBar));
