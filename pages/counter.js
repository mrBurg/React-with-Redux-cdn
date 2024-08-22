'use strict';

import { increment, decrement } from '/app/action.js';
import { SimpleButton } from '/components/ui/SimpleButton/SimpleButton.js';

const { createElement, Component } = React;
const { connect } = ReactRedux;

class CounterComponent extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return createElement(
      'div',
      { className: 'counter' },
      createElement(
        'div',
        { className: 'counter__scoreboard' },
        `Count: ${counter}`
      ),
      createElement(SimpleButton, { callback: decrement }, 'Decrement'),
      createElement(SimpleButton, { callback: increment }, 'Increment')
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement(2)),
  increment: () => dispatch(increment(5)),
});

const CounterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

export default CounterPage;
