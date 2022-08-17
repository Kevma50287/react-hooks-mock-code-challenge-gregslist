import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

const url = 'http://localhost:6001/listings'

function App() {
  const [fetchData, setFetchData] = useState([])
  const [search, setSearch] = useState(null)
  const [toggleSort, setToggleSort] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => setFetchData(d))
  }, [])

  const addItem = (item) => {
    setFetchData([...fetchData, item])
  }

  const removeItem = (id) => {
    const newData = fetchData.filter((item) => item.id !== id)
    setFetchData(newData)
  }

  const searchByText = (data) => {
    if (search) {
      return data.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return data
    }
  }

  const sortByLocation = (data) => {
    if (toggleSort) {
      return data.sort((a, b) => {
        const locationA = a.location
        const locationB = b.location
        console.log(locationA, locationB)
        return locationA.localeCompare(locationB)
      })
    } else {
      return data.sort((a, b) => {
        const one = a.id
        const two = b.id
        return one - two
      })
    }
  }

  const searchedThroughListing = searchByText(fetchData)
  const sortedThroughListing = sortByLocation(searchedThroughListing)

  return (
    <div className="app">
      <Header setSearch={setSearch} toggle={toggleSort} setToggleSort={setToggleSort} />
      <Form addItem={addItem} />
      <ListingsContainer fetchData={sortedThroughListing} removeItem={removeItem} />
    </div>
  );
}

export { url }
export default App;
