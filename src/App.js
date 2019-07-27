import React, { useState, useEffect } from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const[searchQuery, setSearchQuery] = useState("react");
  const[url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=react");
  const[loading, setLoading] = useState(false);

  const fetchNews = () => {
    setLoading(true);
    fetch(url)
    .then(res => res.json())
    .then(data => (setNews(data.hits), setLoading(false)))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchNews();
  }, [url]); // 2nd argument - this function only runs when url is changed

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  const showLoading = () => (loading ? <h2>loading...</h2>: "")

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange}/>
      <button>Search</button>
    </form>
  )

  const showNews = () => (
    news.map((n, i) => {
    return <p key={i}>{n.title}</p>
    })
  )

  return(
    <div>
      <h2>NEWS</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </div>
  )
}

// const App = () => {
//   const [count, setCount] = useState(0); // sets count to 0 and has a function setCount for changing the state.

//   useEffect(() => {
//     document.title = `Clicked ${count} times`
//   })

//   const increment = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h2>Counter App</h2>
//       <h1>Count: {count}</h1>
//       <button onClick={increment} style={ {height: '50px', width: '50px'} }> + </button>
//     </div>
//   )
// }

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

//   componentDidMount() {
//      document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`
//  }

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
