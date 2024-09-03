'use strict';

import { appendStyle } from '/utils/files.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';
import {
  increment,
  decrement,
  sagaIncrement,
  sagaDecrement,
  reset,
} from '/app/action.js';

appendStyle('/components/Counter/Counter.css');

const { createElement: create, useState, useCallback } = React;
const { useDispatch, useSelector } = ReactRedux;

export const Counter = () => {
  const { value, disabled } = useSelector(({ counter }) => counter);
  const [count, setCount] = useState(value);

  const dispatch = useDispatch();

  const IncrementHandle = useCallback(() => {
    dispatch(increment(2));
  }, [dispatch]);

  const decrementHandle = useCallback(() => {
    dispatch(decrement(2));
  }, [dispatch]);

  const sagaIncrementHandle = useCallback(() => {
    dispatch(sagaIncrement(10));
  }, [dispatch]);

  const sagaDecrementHandle = useCallback(() => {
    dispatch(sagaDecrement(10));
  }, [dispatch]);

  const resetHandle = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return create(
    'div',
    { className: 'counter' },
    create('div', { className: 'counter__scoreboard' }, `Store state ${value}`),
    create(SimpleButton, { disabled, onClick: decrementHandle }, 'Decrement'),
    create(SimpleButton, { disabled, onClick: IncrementHandle }, 'Increment'),
    create(
      SimpleButton,
      { disabled, onClick: sagaDecrementHandle },
      'Saga decrement'
    ),
    create(
      SimpleButton,
      { disabled, onClick: sagaIncrementHandle },
      'Saga increment'
    ),
    create(SimpleButton, { disabled, onClick: resetHandle }, 'Reset'),
    create(
      'div',
      { className: 'counter__scoreboard' },
      `Counter state ${count}`
    ),
    create(
      SimpleButton,
      {
        onClick: () => {
          setCount((count) => count - 1);
        },
      },
      '-'
    ),
    create(
      SimpleButton,
      {
        onClick: () => {
          setCount((count) => count + 1);
        },
      },
      '+'
    )
  );
};
