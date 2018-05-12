import * as React from 'react';
import CounterContainer from 'containers/CounterContainer';
import TodoContainer from 'containers/TodoContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CounterContainer />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
