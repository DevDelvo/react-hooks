import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // sets count to 0 and has a function setCount for changing the state.

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Counter App</h2>
      <h1>Count: {count}</h1>
      <button onClick={increment} style={ {height: '50px', width: '50px'} }> + </button>
    </div>
  )
}
// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   increment = () => {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment} style={ {height: '50px', width: '50px'} }> + </button>
//       </div>
      
//     );
//   }
// }

export default App;
