'use strict';

import { increment, decrement } from '/app/action.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';

const { createElement: create, Component } = React;
const { connect } = ReactRedux;

class CounterComponent extends Component {
  render() {
    const {
      counter: { counter },
      increment,
      decrement,
    } = this.props;

    return create(
      'div',
      { className: 'counter' },
      create('div', { className: 'counter__scoreboard' }, `Count: ${counter}`),
      create(SimpleButton, { callback: decrement }, 'Decrement'),
      create(SimpleButton, { callback: increment }, 'Increment')
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement(5)),
  increment: () => dispatch(increment(5)),
  dispatch,
});
const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default function CounterPage() {
  return create(Counter);
}
