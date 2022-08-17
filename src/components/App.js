import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

const url = 'http://localhost:6001/listings'

function App() {
  const [fetchData, setFetchData] = useState([])
  const [search, setSearch] = useState(null)

  useEffect(()=> {
    fetch(url)
    .then(r=>r.json())
    .then(d =>  setFetchData(d))
  }, [])

  const addItem = (item) => {
    setFetchData([...fetchData, item])
  }
  const removeItem = (id) => {
    const newData = fetchData.filter((item) => item.id !== id)
    setFetchData(newData)
  }

  const searchByText = (data) => {
    if (search){
      return data.filter((item)=>item.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return data
    }
  } 

  const searchedThroughListing = searchByText(fetchData)

  return (
    <div className="app">
      <Header setSearch={setSearch} addItem={addItem} />
      <Form addItem={addItem}/>
      <ListingsContainer fetchData={searchedThroughListing} removeItem={removeItem} />
    </div>
  );
}

export {url} 
export default App;
