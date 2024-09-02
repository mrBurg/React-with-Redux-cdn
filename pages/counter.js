'use strict';

import { appendStyle } from '/utils/files.js';
import { increment, decrement } from '/app/action.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';

appendStyle('/components/Counter/Counter.css');

const { createElement: create, Component } = React;
const { connect } = ReactRedux;

class CounterComponent extends Component {
  render() {
    const { counter, increment, decrement, dispatch } = this.props;

    return create(
      'div',
      { className: 'counter' },
      create(
        'div',
        { className: 'counter__scoreboard' },
        `Count: ${counter.counter}`
      ),
      create(SimpleButton, { onClick: decrement }, 'Decrement'),
      create(SimpleButton, { onClick: increment }, 'Increment'),
      create(
        SimpleButton,
        { onClick: () => dispatch(increment) },
        'Alternative increment'
      )
    );
  }
}

const mapStateToProps = (state) => ({ counter: state });

const mapDispatchToProps = (dispatch) => ({
  decrement: () => {
    dispatch(decrement(1));
  },
  increment: () => {
    dispatch(increment(1));
  },
  dispatch,
});
const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default () => create(Counter);
