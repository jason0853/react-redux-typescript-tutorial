import * as React from 'react';
import Counter from 'components/Counter';

interface State {
  count: number;
}

class CounterContainer extends React.Component<{}, State> {

  state: State = {
    count: 0
  };

  handleIncrement = (): void => {
    this.setState(
      ({ count }) => ({ count: count + 1 })
    );
  }

  handleDecrement = (): void => {
    this.setState(
      ({ count }) => ({ count: count - 1 })
    );
  }

  render() {

    const { handleIncrement, handleDecrement } = this;
    const { count } = this.state;

    return (
      <div>
        <h1>Counter</h1>
        <Counter 
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
  }
}

export default CounterContainer;