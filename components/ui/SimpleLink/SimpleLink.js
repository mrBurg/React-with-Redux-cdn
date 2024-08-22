'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/ui/SimpleLink/SimpleLink.css');

const { createElement } = React;

export const SimpleLink = ({ text, href }) =>
  createElement('a', { className: 'simple-link', href }, text);
