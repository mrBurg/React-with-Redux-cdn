export default {
  mainPages: [
    {
      path: '/',
      text: 'Home',
      order: 0,
      component: 'index.js',
      exact: true,
    },
    {
      path: '/counter',
      text: 'Counter',
      order: 1,
      component: 'counter.js',
    },
    {
      path: '/canvas',
      text: 'Canvas',
      order: 2,
      component: 'canvas.js',
      noFooter: true,
    },
    {
      path: '/page',
      text: 'Nest Page',
      order: 3,
      component: 'nest-page.js',
      exact: true,
      noFooter: true,
    },
  ],
  nestPages: [
    {
      path: '/page/:pageId',
      text: 'Nest Page',
      component: 'nest-page.js',
      noFooter: true,
    },
  ],
  testPages: [
    {
      path: '/redirect',
      text: 'Redirect',
    },
    {
      path: '/not-found',
      text: 'Not found',
    },
  ],
  fetchData: {
    users: 'https://jsonplaceholder.typicode.com/users/?size=50',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments',
    todos: 'https://jsonplaceholder.typicode.com/todos',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/photos',
  },
};
