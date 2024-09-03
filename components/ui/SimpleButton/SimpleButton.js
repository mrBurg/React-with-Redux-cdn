'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/ui/SimpleButton/SimpleButton.css');

const { createElement: create } = React;

export const SimpleButton = ({
  children,
  className,
  disabled,
  onClick = _.noop,
}) =>
  create(
    'button',
    {
      className: classNames('simple-button', className),
      onClick,
      disabled,
    },
    children
  );

SimpleButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
