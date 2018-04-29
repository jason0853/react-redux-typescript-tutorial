import * as React from 'react';
import TodoContainer from 'containers/TodoContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
