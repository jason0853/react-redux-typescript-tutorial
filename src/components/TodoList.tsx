import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: { id: number; text: string; completed: boolean; }[];
  onDelete(id: number): void;
  onCheckbox(id: number): void;
}

class TodoList extends React.Component<Props, {}> {

  shouldComponentUpdate(nextProps: Props) {
    return this.props.todos !== nextProps.todos;
  }

  render() {

    const { todos, onDelete, onCheckbox } = this.props;

    const todoList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onDelete={() => onDelete(todo.id)}
        onCheckbox={() => onCheckbox(todo.id)}
      />
    ));

    return (
      <ul>
        { todoList }
      </ul>
    );
  }
}

export default TodoList;