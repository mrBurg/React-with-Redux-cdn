export default {
  mainPages: [
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
  additionalPages: [
    {
      href: '/page/desc',
      text: 'Nest Page',
      exact: true,
    },
  ],
  nestedPages: [
    {
      href: '/page/1',
      text: 'Nest Page 1',
      exact: true,
    },
    {
      href: '/page/2',
      text: 'Nest Page 2',
      exact: true,
    },
    {
      href: '/page/3',
      text: 'Nest Page 3',
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
  fetchData: {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments',
    todos: 'https://jsonplaceholder.typicode.com/todos',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/photos',
  },
};
