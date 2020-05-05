import React, { useState, useEffect } from "react";

const App = () => {
  // const [count, setcount] = useState(0);
  // useEffect(() =>{
  //   document.title = `clicked ${count} title`
  // })
  //   const increment = () =>{
  //   setcount(count +1);
  // };
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <h2>Counter App</h2>
    // <button onClick={increment}> Clicked {count} times</button>
    //     </header>
    //   </div>
    // );
  




  const [news, setNews] = useState([]);;
  const [searchQuery, setsearchQuery] = useState('react');
  const [url, seturl] = useState('http://hn.algolia.com/api/v1/search?query=react')
  const [loading, setloading] = useState(false)



  useEffect(() => { const fetchNews = () =>{
    setloading(true)
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits) ))
    .catch(err => console.log(err))
    };
  fetchNews();
  },[url]);


   const handleChange = (e) =>{
  setsearchQuery(e.target.value)
   }
   const handleSubmit = e =>{
     e.preventDefault();
     seturl(`http://hn.algolia.com/api/v1/search?query=react${searchQuery}`);
   }
   const showLoading = () => (loading ? <h2> Loading...</h2> :"");

   const searchForm = () => (
   <form onSubmit={handleSubmit}>
    <input type="text" value={searchQuery} onChange={handleChange} />
    <button>Search</button>
  </form>)

  const showNews = () => (
     news.map((n,i) =>(
      <p keys={i} >{n.title}</p>
      )
      )
  )
   return (
    <div>
  <h2>News</h2>
  {showLoading()}
  {searchForm()}
   {showNews()}
    </div>
  )
   }
export default App;
