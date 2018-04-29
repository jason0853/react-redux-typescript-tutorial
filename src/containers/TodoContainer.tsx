import * as React from 'react';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

interface State {
  input: string;
  todos: { id: number; text: string; completed: boolean; }[];
}

class TodoContainer extends React.Component<{}, State> {

  id: number = 0;

  state: State = {
    input: '',
    todos: []
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState({ input: value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const { input, todos } = this.state;

    const newTodos = [
      ...todos, 
      { 
        id: this.id++,
        text: input,
        completed: false
      }
    ];

    this.setState({ input: '', todos: newTodos });
  }

  handleDelete = (id: number): void => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  handleCheckbox = (id: number): void => {
    const { todos } = this.state;
    const idx = todos.findIndex(todo => todo.id === id);

    const newTodos = [
      ...todos.slice(0, idx),
      {
        ...todos[idx],
        completed: !todos[idx].completed
      },
      ...todos.slice(idx+1, todos.length)
    ];

    this.setState({ todos: newTodos });
  }

  render() {

    const { 
      handleChange, 
      handleSubmit, 
      handleDelete,
      handleCheckbox
    } = this;

    const { input, todos } = this.state;

    return (
      <div>
        <TodoForm 
          input={input}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <TodoList 
          todos={todos}
          onDelete={handleDelete}
          onCheckbox={handleCheckbox}
        />
      </div>
    );
  }
}

export default TodoContainer;