import * as React from 'react';

interface Props {
  id: number;
  text: string;
  completed: boolean;
  onDelete(): void;
  onCheckbox(): void;
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
      onCheckbox 
    } = this.props;

    return (
      <li>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{ text }</span>
        <input 
          type="checkbox" 
          defaultChecked={completed}
          onChange={onCheckbox}
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