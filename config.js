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
      noFooter: true,
    },
    {
      href: '/counter',
      text: 'Counter',
      component: 'counter.js',
    },
    {
      href: '/page',
      text: 'Nest Page',
      component: 'nest-page.js',
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
