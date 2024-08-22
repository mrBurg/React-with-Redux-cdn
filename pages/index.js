'use strict';

import { Counter } from '/components/Counter/Counter.js';

const { createElement } = React;

export default function HomePage() {
  return createElement(Counter);
}
