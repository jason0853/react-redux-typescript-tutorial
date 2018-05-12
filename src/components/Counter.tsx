import * as React from 'react';

type Props = {
  count: number;
  onIncrease(): void;
  onDecrease(): void;
}

const Counter:React.SFC<Props> = ({
  count, onIncrease, onDecrease
}) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;