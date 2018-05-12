import * as React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import { StoreState } from 'store/models';
import { CounterActions } from 'store/actionCreators';

type Props = {
  count: number;
}

class CounterContainer extends React.Component<Props> {

  handleIncrease = (): void => {
    CounterActions.increase();
  }

  handleDecrease = (): void => {
    CounterActions.decrease();
  }

  render() {

    const { handleIncrease, handleDecrease } = this;
    const { count } = this.props;

    return (
      <div>
        <h1>Counter</h1>
        <Counter 
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
    );
  }
}

export default connect(
  ({ counter }: StoreState) => ({
    count: counter.count
  })
)(CounterContainer);