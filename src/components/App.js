import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

const url = 'http://localhost:6001/listings'

function App() {
  //create useState to store fetch data
  const [fetchData, setFetchData] = useState([])

  //create useState to store search string
  const [search, setSearch] = useState(null)

  //create useState for sort toggle
  const [toggleSort, setToggleSort] = useState(false)


  //useEffect runs once to fetch data on initla page render
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => setFetchData(d))
  }, [])

  //functions to add and remove items from dataset
  const addItem = (item) => {
    setFetchData([...fetchData, item])
  }

  const removeItem = (id) => {
    const newData = fetchData.filter((item) => item.id !== id)
    setFetchData(newData)
  }

  //function to filter data set by search string
  const searchByText = (data) => {
    if (search) {
      return data.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return data
    }
  }

  //function to sort data by location based on toggle
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

  //constants to store altered listings
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
