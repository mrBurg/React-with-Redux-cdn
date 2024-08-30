'use strict';

import cfg from '/config.js';
import { updatePosts } from '/app/action.js';

const { createElement: create, Fragment, useEffect } = React;
const { Link, useParams } = ReactRouterDOM;
const { useDispatch, useSelector } = ReactRedux;

export default () => {
  const { pageId } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(cfg.fetchData.posts);
        const data = await response.json();

        dispatch(updatePosts(data)), [dispatch];
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUser();
  }, [dispatch]);

  return create(
    Fragment,
    null,
    create(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      create(
        'div',
        null,
        posts.map((item) =>
          create(
            'div',
            { key: item.id },
            create(Link, { to: `/page/${item.id}` }, `Post #${item.id}`)
          )
        )
      ),
      pageId &&
        !_.isEmpty(posts) &&
        create(
          'div',
          null,
          _.find(posts, ({ id }) => String(id) == pageId).title,
          create('br'),
          _.find(posts, ({ id }) => String(id) == pageId).body
        ),
      create(Link, { to: '/page' }, 'To Top')
    )
  );
};
