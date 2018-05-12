import * as React from 'react';
import { connect } from 'react-redux';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import { StoreState } from 'store/models';
import { TodoItemData } from 'store/models/todo';
import { TodoActions } from 'store/actionCreators';

type Props = {
  input: string;
  list: TodoItemData[];
}

class TodoContainer extends React.Component<Props> {

  id: number = 0;

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    TodoActions.changeInput(value);
  }

  handleCreate = (e: React.FormEvent<HTMLFormElement>): void => {
    const { input } = this.props; 
    e.preventDefault();
    TodoActions.add({ id: this.id++, text: input });
  }

  handleToggle = (id: number): void => {
    TodoActions.toggle(id);
  }

  handleDelete = (id: number): void => {
    TodoActions.delete(id);
  }

  render() {

    const { 
      handleChange,
      handleCreate,
      handleToggle,
      handleDelete
    } = this;

    const { input, list } = this.props;

    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm 
          input={input}
          onChange={handleChange}
          onCreate={handleCreate}
        />
        <TodoList 
          todos={list}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    );
  }
}

export default connect(
  ({ todo }: StoreState) => ({
    input: todo.input,
    list: todo.list
  })
)(TodoContainer);