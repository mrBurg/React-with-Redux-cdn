export const cfg = {
  navItems: [
    {
      href: '/',
      text: 'Home',
      component: 'index.js',
      exact: true,
    },
    {
      href: '/canvas',
      text: 'Canvas',
      component: 'canvas.js',
      exact: true,
      noFooter: true,
    },
    {
      href: '/counter',
      text: 'Counter',
      component: 'counter.js',
      exact: true,
    },
  ],
  serviceNavItems: [
    {
      href: '/redirect',
      text: 'Redirect',
    },
    {
      href: '/not-found',
      text: 'Not found',
    },
  ],
};
