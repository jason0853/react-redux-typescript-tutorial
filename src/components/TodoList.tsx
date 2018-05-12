import * as React from 'react';
import TodoItem from './TodoItem';
import { TodoItemData } from 'store/models/todo';

type Props = {
  todos: TodoItemData[];
  onDelete(id: number): void;
  onToggle(id: number): void;
}

class TodoList extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props) {
    return this.props.todos !== nextProps.todos;
  }

  render() {

    const { todos, onDelete, onToggle } = this.props;

    const todoList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onDelete={() => onDelete(todo.id)}
        onToggle={() => onToggle(todo.id)}
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