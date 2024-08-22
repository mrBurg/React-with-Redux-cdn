'use strict';

import { appendStyle } from '/utils/common.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';
import { increment, decrement } from '/app/action.js';

appendStyle('/components/Counter/Counter.css');

const { createElement, useState } = React;
const { connect, useDispatch, useSelector } = ReactRedux;

const CounterComponent = ({ counter }) => {
  const data = useSelector(() => counter);
  const [count, setCount] = useState(data);

  const dispatch = useDispatch();

  const IncrementHandleClick = () => setCount(count + 1);
  const decrementHandleClick = () => setCount(count - 1);

  return createElement(
    'div',
    { className: 'counter' },
    createElement('div', { className: 'counter__scoreboard' }, count),
    createElement(SimpleButton, { callback: decrementHandleClick }, '-'),
    createElement(SimpleButton, { callback: IncrementHandleClick }, '+'),
    createElement(
      SimpleButton,
      { callback: () => dispatch(decrement()) },
      'dispatch -'
    ),
    createElement(
      SimpleButton,
      { callback: () => dispatch(increment()) },
      'dispatch +'
    )
  );
};

const mapStateToProps = (state) => ({ counter: state.counter });
export const Counter = connect(mapStateToProps)(CounterComponent);
