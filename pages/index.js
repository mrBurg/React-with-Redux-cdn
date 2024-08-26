'use strict';

import cfg from '/config.js';
import { Counter } from '/components/Counter/Counter.js';

const { createElement: create, useEffect } = React;

export default () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(cfg.fetchData.todos);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUser();
  }, []);

  return create(Counter);
};
