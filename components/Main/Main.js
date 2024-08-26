'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/Main/Main.css');

const { createElement: create } = React;

export const Main = ({ children }) =>
  create('main', { className: 'main' }, children);

Main.propTypes = {
  children: PropTypes.object.isRequired,
};
