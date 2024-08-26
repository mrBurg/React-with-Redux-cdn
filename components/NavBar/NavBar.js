'use strict';

import { appendStyle } from '/utils/files.js';

appendStyle('/components/NavBar/NavBar.css');

const { createElement: create } = React;
const { Link, useLocation } = ReactRouterDOM;

export const NavBar = ({ items }) => {
  const route = useLocation();
  console.log(route);
  console.log(items);

  return create(
    'nav',
    { className: 'nav-bar' },
    items.map((item) =>
      create(
        Link,
        {
          key: item.href,
          className: classNames('nav-bar__link', {
            ['active']: item.href == route.pathname,
          }),
          to: item.href,
        },
        item.text
      )
    )
  );
};

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
};
