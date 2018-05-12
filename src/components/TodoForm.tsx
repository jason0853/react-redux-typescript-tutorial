import * as React from 'react';

type Props = {
  input: string;
  onChange(e: any): void;
  onCreate(e: any): void;
}

const TodoForm:React.SFC<Props> = ({
  input, onChange, onCreate
}) => {
  return (
    <form onSubmit={onCreate}>
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