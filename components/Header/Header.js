'use strict';

import { appendStyle } from '/utils/common.js';
import { NavBar } from '/components/NavBar/NavBar.js';

appendStyle('/components/Header/Header.css');

const { createElement: create } = React;

export const Header = () =>
  create('header', { className: 'header' }, create(NavBar));
