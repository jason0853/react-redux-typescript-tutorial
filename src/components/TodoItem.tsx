import * as React from 'react';

type Props = {
  id: number;
  text: string;
  completed: boolean;
  onDelete(): void;
  onToggle(): void;
}

class TodoItem extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props) {
    return this.props.completed !== nextProps.completed;
  }

  render() {

    const { 
      text, 
      completed, 
      onDelete, 
      onToggle 
    } = this.props;

    return (
      <li>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{ text }</span>
        <input 
          type="checkbox" 
          defaultChecked={completed}
          onChange={onToggle}
        />
        <button 
          type="button"
          onClick={onDelete}
        >DELETE</button>
      </li>
    );
  }
}

export default TodoItem;