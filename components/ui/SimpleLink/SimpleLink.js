'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/ui/SimpleLink/SimpleLink.css');

const { createElement: create } = React;

export const SimpleLink = ({ text, href }) =>
  create('a', { className: 'simple-link', href }, text);

SimpleLink.propTypes = {
  text: PropTypes.string.isRequire,
  href: PropTypes.string.isRequire,
};
