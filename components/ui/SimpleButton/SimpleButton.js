'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/ui/SimpleButton/SimpleButton.css');

const { createElement: create } = React;

export const SimpleButton = ({ children, className, callback }) =>
  create(
    'button',
    {
      className: classNames('simple-button', className),
      onClick: callback,
    },
    children
  );
