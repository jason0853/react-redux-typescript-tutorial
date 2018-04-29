import * as React from 'react';

interface Props {
  input: string;
  onChange(e: any): void;
  onSubmit(e: any): void;
}

const TodoForm:React.SFC<Props> = ({
  input, onChange, onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        value={input}
        onChange={onChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;