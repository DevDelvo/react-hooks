import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment} style={ {height: '50px', width: '50px'} }> + </button>
      </div>
      
    );
  }
}

export default App;
