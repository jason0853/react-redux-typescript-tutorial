import * as React from 'react';
import Person from 'components/Person';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Person 
          name="Jason"
          age={33}
          job={true}
        />
      </div>
    );
  }
}

export default App;
