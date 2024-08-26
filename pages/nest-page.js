'use strict';

import cfg from '/config.js';
import { updateUsers } from '/app/action.js';

const { createElement: create, Fragment, useEffect } = React;
const { Link, useParams } = ReactRouterDOM;
const { useDispatch, useSelector } = ReactRedux;

export default () => {
  const { pageId } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(cfg.fetchData.users);
        const data = await response.json();

        dispatch(updateUsers(data)), [dispatch];
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
        users.map((item) =>
          create(
            'div',
            { key: item.id },
            create(Link, { to: `/page/${item.id}` }, item.name)
          )
        )
      ),
      pageId &&
        users.length &&
        create(
          'div',
          null,
          _.find(users, (user) => String(user.id) == pageId).phone
        ),
      create(Link, { to: '/page' }, 'To Top')
    )
  );
};
