import * as React from 'react';

interface Props {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

const Counter:React.SFC<Props> = ({
  count, onIncrement, onDecrement
}) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>_</button>
    </div>
  );
};

export default Counter;