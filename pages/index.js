'use strict';

import { Counter } from '/components/Counter/Counter.js';

const { createElement: create, useEffect } = React;

export default function HomePage() {
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUser();
  }, []);

  return create(Counter);
}
