'use strict';

import { appendStyle } from '/utils/files.js';
import { increment, decrement, reset } from '/app/action.js';
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
        `Count: ${counter.value}`
      ),
      create(
        SimpleButton,
        { onClick: decrement, disabled: counter.disabled },
        'Decrement'
      ),
      create(
        SimpleButton,
        { onClick: increment, disabled: counter.disabled },
        'Increment'
      ),
      create(
        SimpleButton,
        { onClick: () => dispatch(increment), disabled: counter.disabled },
        'Alternative increment'
      ),
      create(
        SimpleButton,
        { onClick: () => dispatch(reset()), disabled: counter.disabled },
        'reset'
      )
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter });

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
