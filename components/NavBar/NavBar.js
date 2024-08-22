'use strict';

import { appendStyle } from '/utils/common.js';

appendStyle('/components/NavBar/NavBar.css');

const { createElement: create } = React;
const { Link } = ReactRouterDOM;
const { useSelector } = ReactRedux;

export const NavBar = () => {
  const navItems = useSelector((state) => state.navbar.navItems);

  return create(
    'nav',
    { className: 'nav-bar' },
    ...navItems.map((item) =>
      create(Link, { className: 'nav-bar__link', to: item.href }, item.text)
    )
  );
};
