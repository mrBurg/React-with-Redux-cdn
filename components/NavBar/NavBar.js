'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/NavBar/NavBar.css');

const { createElement: create } = React;
const { Link, useLocation } = ReactRouterDOM;

export const NavBar = ({ items }) => {
  const route = useLocation();

  return create(
    'nav',
    { className: 'nav-bar' },
    items.map(({ path, text }) =>
      create(
        Link,
        {
          key: path,
          className: classNames('nav-bar__link', {
            ['active']: path == route.pathname,
          }),
          to: path,
        },
        text
      )
    )
  );
};

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
};
