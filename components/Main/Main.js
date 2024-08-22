'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/Main/Main.css');

const { createElement: create } = React;

export const Main = ({ children }) =>
  create('main', { className: 'main' }, children);
