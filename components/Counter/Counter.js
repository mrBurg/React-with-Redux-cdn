'use strict';

import { appendStyle } from '/utils/common.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';
import { increment, decrement } from '/app/action.js';

appendStyle('/components/Counter/Counter.css');

const { createElement: create, useState, useCallback, useEffect } = React;
const { useDispatch, useSelector } = ReactRedux;

export const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const [count, setCount] = useState(counter);

  const dispatch = useDispatch();

  const IncrementHandle = useCallback(() => dispatch(increment(2)), [dispatch]);
  const decrementHandle = useCallback(() => dispatch(decrement(2)), [dispatch]);

  return create(
    'div',
    { className: 'counter' },
    create(
      'div',
      { className: 'counter__scoreboard' },
      `Store state ${counter}`
    ),
    create(SimpleButton, { callback: decrementHandle }, 'Dispatch decrement'),
    create(SimpleButton, { callback: IncrementHandle }, 'Dispatch increment'),
    create(
      'div',
      { className: 'counter__scoreboard' },
      `Counter state ${count}`
    ),
    create(
      SimpleButton,
      { callback: () => setCount((count) => count - 1) },
      '-'
    ),
    create(
      SimpleButton,
      { callback: () => setCount((count) => count + 1) },
      '+'
    )
  );
};
