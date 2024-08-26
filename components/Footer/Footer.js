'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/Footer/Footer.css');

const { createElement: create } = React;

export const Footer = () =>
  create('footer', { className: 'footer' }, '\u00A9 2024 By Me');
