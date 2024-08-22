'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/ui/SimpleLink/SimpleLink.css');

const { createElement: create } = React;

export const SimpleLink = ({ text, href }) =>
  create('a', { className: 'simple-link', href }, text);
