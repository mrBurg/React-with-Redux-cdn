'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/ui/SimpleButton/SimpleButton.css');

const { createElement } = React;

export const SimpleButton = ({ children, className, callback }) =>
  createElement(
    'button',
    {
      className: classNames('simple-button', className),
      onClick: callback,
    },
    children
  );
