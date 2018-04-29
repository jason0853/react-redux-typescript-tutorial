import * as React from 'react';
import CounterContainer from 'containers/CounterContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
